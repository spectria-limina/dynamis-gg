function headingLevel(elem) {
    switch (elem.tagName) {
        case "H1": return 1
        case "H2": return 2
        case "H3": return 3
        case "H4": return 4
        case "H5": return 5
        case "H6": return 6
        default: return null
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    document.querySelectorAll("[data-bs-toggle='tooltip']").forEach(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    document.querySelectorAll(".collapse-heading").forEach(heading => {
        const parent = heading.parentNode
        const button = document.createElement("button")
        const contents = document.createElement("div")

        button.replaceChildren(...heading.childNodes)
        heading.replaceChildren(button)

        contents.className = "collapse"
        parent.insertBefore(contents, heading.nextSibling)

        var foundContents = false
        var done = false
        var toMove = []
        parent.childNodes.forEach(node => {
            if (done) {
                return
            }
            if (foundContents) {
                if (headingLevel(node) && headingLevel(node) <= headingLevel(heading)) {
                    done = true
                    return
                }
                toMove.push(node)
            }
            if (node.isSameNode(contents)) {
                foundContents = true
            }
        })
        for (const node of toMove) {
            contents.appendChild(node)
        }

        const collapse = bootstrap.Collapse.getOrCreateInstance(contents, config = { toggle: false })
        contents.addEventListener("show.bs.collapse", event => {
            console.log("hi")
            heading.classList.remove("collapsed")
        })
        contents.addEventListener("hide.bs.collapse", event => {
            console.log("bye")
            heading.classList.add("collapsed")
        })
        if (location.hash === "#" + heading.id) {
            collapse.show()
        } else {
            collapse.hide()
        }
        button.addEventListener('click', event => {
            console.log("ooh!")
            collapse.toggle()
        })
    })
})

window.addEventListener('hashchange', event => {
    const target = document.querySelector(location.hash + ".collapse-heading>.collapse")
    if (target) {
        collapse = bootstrap.Collapse.getInstance(target)
        if (collapse) {
            collapse.show()
        }
    }
})
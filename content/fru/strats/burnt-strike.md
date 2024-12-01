+++
title="Burnt Strike"
template="cpage.html"

[extra]
stylesheets=["fru/p1/burnt-strike.css"]
+++

## UNDER CONSTRUCTION

<p>{{embed(path="static/fru/p1/burnt-strike.svg")}}</p>

MT: <select id="mt-select" class="job-selector" data-job-target="#mt">
  <option value="pld" selected=true>Paladin</option>
  <option value="war">Warrior</option>
  <option value="drk">Dark Knight</option>
  <option value="gnb">Gunbreaker</option>
</select>
OT: <select id="ot-select" class="job-selector" data-job-target="#ot">
  <option value="pld">Paladin</option>
  <option value="war">Warrior</option>
  <option value="drk" selected=true>Dark Knight</option>
  <option value="gnb">Gunbreaker</option>
</select>
H1: <select id="h1-select" class="job-selector" data-job-target="#h1">
  <option value="whm">White Mage</option>
  <option value="sch">Scholar</option>
  <option value="ast" selected=true>Astrologian</option>
  <option value="sge">Sage</option>
</select>
H2: <select id="h2-select" class="job-selector" data-job-target="#h2">
  <option value="whm">White Mage</option>
  <option value="sch" selected=true>Scholar</option>
  <option value="ast">Astrologian</option>
  <option value="sge">Sage</option>
</select>
M1: <select id="m1-select" class="job-selector" data-job-target="#m1">
  <option value="mnk">Monk</option>
  <option value="drg">Dragoon</option>
  <option value="nin" selected=true>Ninja</option>
  <option value="sam">Samurai</option>
  <option value="rpr">Reaper</option>
  <option value="vpr">Viper</option>
</select>
M2: <select id="m2-select" class="job-selector" data-job-target="#m2">
  <option value="mnk">Monk</option>
  <option value="drg">Dragoon</option>
  <option value="nin">Ninja</option>
  <option value="sam">Samurai</option>
  <option value="rpr">Reaper</option>
  <option value="vpr" selected=true>Viper</option>
</select>
R1: <select id="r1-select" class="job-selector" data-job-target="#r1">
  <option value="brd" selected=true>Bard</option>
  <option value="mch">Machinist</option>
  <option value="dnc">Dancer</option>
</select>
R2: <select id="r2-select" class="job-selector" data-job-target="#r2">
  <option value="blm">Black Mage</option>
  <option value="smn">Summoner</option>
  <option value="rdm">Red Mage</option>
  <option value="pct" selected=true>Pictomancer</option>
</select>

<script type="text/javascript">
    const selectors = document.getElementsByClassName("job-selector");
    for (let selector of selectors) {
        selector.addEventListener("change", (event) => {
            var targetId = selector.dataset.jobTarget;
            if (targetId.startsWith("#")) {
                targetId = targetId.substring(1);
            }
            console.log(targetId);
            const target = document.getElementById(targetId);
            console.log(target)
            target.setAttribute("filter", "url(#".concat(event.target.value, "-icon)"));
        })
    }
</script>

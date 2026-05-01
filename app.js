const VERSION = "v2026.05.02";

const RESILIENCE_BY_ATTACKER = [
  0, 0.143, 0.259, 0.353, 0.42, 0.466, 0.5, 0.524, 0.546, 0.566,
  0.585, 0.602, 0.618, 0.633, 0.646, 0.659, 0.671, 0.682, 0.692, 0.702,
  0.711, 0.72, 0.728, 0.736, 0.743, 0.75, 0.75, 0.75, 0.75, 0.75,
];

const AOE_BY_TARGETS = [
  [1, 0], [2, 0.08], [3, 0.16], [4, 0.24], [5, 0.32],
  [6, 0.4], [7, 0.48], [8, 0.56], [9, 0.56],
];

const BASILISK_DEBUFFS = [
  ["N", 0],
  ["Flame", 0.15],
  ["Venom", 0.333],
  ["Venom + Flame", 0.483],
];

const RESIST_POTIONS = [
  ["0", 0], ["3", 0.24812], ["3.1", 0.33775], ["3.2", 0.39394], ["3.3", 0.43503],
  ["5", 0.39394], ["5.1", 0.43503], ["5.2", 0.46809], ["5.3", 0.49749],
  ["7", 0.46809], ["7.1", 0.49749], ["7.2", 0.51923], ["7.3", 0.53917],
];

const AVA_OMELETTES = [
  ["0", 0], ["3", 0.02439], ["3.1", 0.03568], ["3.2", 0.04489], ["3.3", 0.05303],
  ["5", 0.04489], ["5.1", 0.05303], ["5.2", 0.06191], ["5.3", 0.0689],
  ["7", 0.06191], ["7.1", 0.0689], ["7.2", 0.07493], ["7.3", 0.07919],
];

const WEAPON_PEN = [
  ["Broadsword", 0.3], ["Claymore", 0.3], ["Dual Swords", 0.25], ["Clarent Blade", 0.05],
  ["Carving Sword", 0.25], ["Galatine Pair", 0.2], ["Kingmaker", 0.2], ["Infinity Blade", 0.15],
  ["Battleaxe", 0.2], ["Greataxe", 0.2], ["Halberd", 0.15], ["Carrioncaller", 0.15],
  ["Infernal Scythe", 0.15], ["Bear Paws", 0.2], ["Realmbreaker", 0.15], ["Crystal Reaper", 0.15],
  ["Mace", 0.1], ["Heavy Mace", 0.1], ["Morning Star", 0.1], ["Bedrock Mace", 0.1],
  ["Incubus Mace", 0.1], ["Camlann Mace", 0.1], ["Oathkeepers", 0.1], ["Dreadstorm Monarch", 0.1],
  ["Hammer", 0.1], ["Polehammer", 0.1], ["Great Hammer", 0.1], ["Tombhammer", 0.1],
  ["Forge Hammers", 0.2], ["Grovekeeper", 0.1], ["Hand of Justice", 0.1], ["Truebolt Hammer", 0.1],
  ["Brawler Gloves", 0.25], ["Battle Bracers", 0.2], ["Spiked Gauntlets", 0.1], ["Ursine Maulers", 0.2],
  ["Hellfire Hands", 0.1], ["Ravenstrike Cestus", 0.2], ["Fists of Avalon", 0.2], ["Forcepulse Bracers", 0.2],
  ["Dagger", 0.4], ["Dagger Pair", 0.4], ["Claws", 0.4], ["Bloodletter", 0.4],
  ["Demonfang", 0.25], ["Deathgivers", 0.4], ["Bridled Fury", 0.25], ["Twin Slayers", 0.2],
  ["Spear", 0.25], ["Pike", 0.3], ["Glaive", 0.3], ["Heron Spear", 0.1],
  ["Spirithunter", 0.05], ["Trinity Spear", 0.25], ["Daybreaker", 0.25], ["Rift Glaive", 0.05],
  ["Quarterstaff", 0.1], ["Iron-clad Staff", 0.1], ["Double Bladed Staff", 0.1], ["Black Monk Stave", 0.1],
  ["Soulscythe", 0.1], ["Staff of Balance", 0.1], ["Grailseeker", 0.1], ["Phantom Twinblade", 0.1],
  ["Prowling Staff", 0.4], ["Primal Staff", 0.1], ["Bloodmoon Staff", 0.2], ["Earthrune Staff", 0.1],
  ["Stillgaze Staff", 0.1], ["Non of them", 0],
];

const I18N = {
  ko: {
    game: "Albion Online", title: "Clap Damage Simulator", author: "작성자 : [SUBUTAI] SSAPGGULBBA",
    reset: "Reset", addSkill: "Add DPS", seqTotal: "Sequancial 최종 피해", minTotal: "Min 최종 피해",
    finalResist: "최종 저항", combatCondition: "전투 조건", supportTank: "오펜시브 서포트/탱커",
    resistPotion: "저항 포션 티어", avaOmelette: "AVA omelett", enemyDisarray: "적 디스어레이", myDisarray: "내 디스어레이",
    clappedEnemy: "맞은 적 수", basilisk: "Basilisk", basePierce: "저그 방깎", mainResist: "타겟 방어구 저항",
    attackerCount: "공격자 수", disarrayDebuff: "디스어레이 감소", aoeBuff: "광역 보너스",
    resilienceDebuff: "레질리언스 감소", sequence: "딜 시퀀스", weapon: "무기", tooltipDamage: "툴팁 피해",
    passiveBuff: "패시브 (%)", activeBuff: "액티브 (%)", damageBuff: "피해 버프", pen: "관통",
    armorCompare: "방어 타입별 데미지 비교", addTarget: "Add Target", targetType: "타입", rawResist: "RAW 저항",
    targetResist: "포션/오믈렛 후 저항", appliedPierceShort: "적용 방깎", damageBreakdown: "피해 분해",
    excelFormula: "v4 엑셀 수식 기준", targetDamageChart: "타입별 Min / Sequancial 그래프", sequenceContribution: "DPS별 최종 데미지 기여",
    active: "active", attackers: "attackers", dpsRows: "DPS rows", appliedPierce: "Applied pierce",
    vsMin: "vs min", avgMin: "avg min", remove: "삭제", languageButton: "English",
    raw: "RAW 저항", potionResist: "포션/오믈렛 적용 저항", basilPierce: "Basilisk 방깎", actualPierce: "실제 적용 방깎",
    minSum: "Min 합계", seqSum: "Sequancial 합계",
  },
  en: {
    game: "Albion Online", title: "Clap Damage Simulator", author: "Author : [SUBUTAI] SSAPGGULBBA",
    reset: "Reset", addSkill: "Add DPS", seqTotal: "Final Sequancial Damage", minTotal: "Final Min Damage",
    finalResist: "Final Resist", combatCondition: "Combat Conditions", supportTank: "Offensive Support & Tank",
    resistPotion: "Resist Potion Tier", avaOmelette: "AVA omelett", enemyDisarray: "Enemy Disarray", myDisarray: "My Disarray",
    clappedEnemy: "Clapped Enemies", basilisk: "Basilisk", basePierce: "Zerg Pierce", mainResist: "Target Armor Resist",
    attackerCount: "Attackers", disarrayDebuff: "Disarray Debuff", aoeBuff: "AOE Bonus",
    resilienceDebuff: "Resilience Debuff", sequence: "Damage Sequence", weapon: "Weapon", tooltipDamage: "Tooltip DMG",
    passiveBuff: "Passive (%)", activeBuff: "Active (%)", damageBuff: "DMG Buff", pen: "Pen",
    armorCompare: "Damage Comparison by Armor Type", addTarget: "Add Target", targetType: "Type", rawResist: "RAW Resist",
    targetResist: "Potion/Omelette Resist", appliedPierceShort: "Applied Pierce", damageBreakdown: "Damage Breakdown",
    excelFormula: "Based on v4 Excel formulas", targetDamageChart: "Min / Sequancial by Target Type", sequenceContribution: "Final Damage Contribution by DPS",
    active: "active", attackers: "attackers", dpsRows: "DPS rows", appliedPierce: "Applied pierce",
    vsMin: "vs min", avgMin: "avg min", remove: "Remove", languageButton: "한국어",
    raw: "RAW Resist", potionResist: "Potion/Omelette Resist", basilPierce: "Basilisk Pierce", actualPierce: "Applied Pierce",
    minSum: "Min Total", seqSum: "Sequancial Total",
  },
};

const DEFAULT_STATE = {
  language: "ko",
  resistPotion: "0",
  avaOmelette: "0",
  rawResist: 0,
  pierce: 0,
  enemyDisarray: 0,
  myDisarray: 0,
  clappedEnemy: 0,
  supportTank: 0,
  basilisk: "N",
  targets: [
    { name: "Robe", rawResist: 150, locked: true },
    { name: "Jacket", rawResist: 200, locked: true },
    { name: "Armor", rawResist: 300, locked: true },
  ],
  skills: Array.from({ length: 10 }, (_, index) => ({
    weapon: "Non of them",
    tooltip: 0,
    passive: 0,
    active: 0,
  })),
};

let state = structuredClone(DEFAULT_STATE);

const els = {
  supportTank: document.querySelector("#supportTank"),
  resistPotion: document.querySelector("#resistPotion"),
  avaOmelette: document.querySelector("#avaOmelette"),
  enemyDisarray: document.querySelector("#enemyDisarray"),
  myDisarray: document.querySelector("#myDisarray"),
  clappedEnemy: document.querySelector("#clappedEnemy"),
  basilisk: document.querySelector("#basilisk"),
  pierce: document.querySelector("#pierce"),
  targetResist: document.querySelector("#targetResist"),
  skillsBody: document.querySelector("#skillsBody"),
  targetCompareBody: document.querySelector("#targetCompareBody"),
  resetButton: document.querySelector("#resetButton"),
  addSkillButton: document.querySelector("#addSkillButton"),
  addTargetButton: document.querySelector("#addTargetButton"),
  languageButton: document.querySelector("#languageButton"),
  damageCanvas: document.querySelector("#damageCanvas"),
  sequenceCanvas: document.querySelector("#sequenceCanvas"),
};

function t(key) {
  return I18N[state.language][key] ?? I18N.ko[key] ?? key;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function numberValue(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function lookupExact(table, key) {
  return table.find(([name]) => String(name) === String(key))?.[1] ?? 0;
}

function lookupOneBased(table, value) {
  const index = clamp(Math.round(value), 1, table.length) - 1;
  return table[index] ?? 0;
}

function lookupFloor(table, value) {
  let result = table[0]?.[1] ?? 0;
  for (const [threshold, effect] of table) {
    if (value >= threshold) result = effect;
  }
  return result;
}

function weaponPenetration(name) {
  return lookupExact(WEAPON_PEN, name);
}

function formatNumber(value, digits = 0) {
  if (!Number.isFinite(value)) return "0";
  return new Intl.NumberFormat(state.language === "ko" ? "ko-KR" : "en-US", { maximumFractionDigits: digits }).format(value);
}

function formatPercent(value, digits = 1) {
  if (!Number.isFinite(value)) return "0%";
  return `${(value * 100).toFixed(digits)}%`;
}

function activeSkills(current) {
  return current.skills.filter((skill) => skill.tooltip > 0);
}

function basiliskAttackerBonus(name) {
  if (name === "Venom + Flame") return 2;
  if (name === "Venom" || name === "Flame") return 1;
  return 0;
}

function globalMods(current) {
  const active = activeSkills(current);
  const attackerCount = active.length + 1 + current.supportTank + basiliskAttackerBonus(current.basilisk);
  return {
    active,
    attackerCount,
    potionBuff: lookupExact(RESIST_POTIONS, current.resistPotion),
    omeletteBuff: lookupExact(AVA_OMELETTES, current.avaOmelette),
    basiliskDebuff: lookupExact(BASILISK_DEBUFFS, current.basilisk),
    disarrayDebuff: Math.max(current.myDisarray - current.enemyDisarray, 0) / 100,
    aoeBuff: lookupFloor(AOE_BY_TARGETS, current.clappedEnemy),
    resilienceDebuff: lookupOneBased(RESILIENCE_BY_ATTACKER, attackerCount),
  };
}

function targetMods(current, rawResist) {
  const mods = globalMods(current);
  const targetResist = rawResist * (1 + mods.potionBuff + mods.omeletteBuff);
  const basiliskPierce = targetResist * mods.basiliskDebuff;
  const appliedPierce = Math.min(current.pierce + basiliskPierce, rawResist * 0.6);
  const finalResist = targetResist - appliedPierce;
  return { ...mods, rawResist, targetResist, basiliskPierce, appliedPierce, finalResist, damageReduction: 100 / (100 + finalResist) };
}

function calculateForTarget(current, rawResist) {
  const mods = targetMods(current, rawResist);
  const rows = current.skills.map((skill, index) => {
    const damageBuff = skill.tooltip > 0 ? skill.passive + Math.min(skill.active, 100) : 0;
    const weaponPen = weaponPenetration(skill.weapon);
    const base = skill.tooltip * (1 + damageBuff);
    const common = base * (1 + mods.aoeBuff) * (1 - mods.disarrayDebuff) * mods.damageReduction;
    const minDamage = common * (1 - mods.resilienceDebuff * (1 - weaponPen));
    const sequentialResilience = lookupOneBased(RESILIENCE_BY_ATTACKER, current.supportTank + index + 2);
    const sequentialDamage = common * (1 - sequentialResilience * (1 - weaponPen));

    return {
      ...skill,
      damageBuff,
      weaponPen,
      buffed: base,
      minDamage: skill.tooltip > 0 ? minDamage : 0,
      sequentialDamage: skill.tooltip > 0 ? sequentialDamage : 0,
    };
  });

  return {
    ...mods,
    rows,
    buffedSum: rows.reduce((sum, row) => sum + row.buffed, 0),
    minTotal: rows.reduce((sum, row) => sum + row.minDamage, 0),
    sequentialTotal: rows.reduce((sum, row) => sum + row.sequentialDamage, 0),
  };
}

function calculate(current) {
  const main = calculateForTarget(current, current.rawResist);
  const comparisons = current.targets.map((target) => ({ ...target, result: calculateForTarget(current, target.rawResist) }));
  return { main, comparisons };
}

function syncInputs() {
  els.supportTank.value = state.supportTank;
  els.resistPotion.value = state.resistPotion;
  els.avaOmelette.value = state.avaOmelette;
  els.enemyDisarray.value = state.enemyDisarray;
  els.myDisarray.value = state.myDisarray;
  els.clappedEnemy.value = state.clappedEnemy;
  els.basilisk.value = state.basilisk;
  els.pierce.value = state.pierce;
  els.targetResist.value = state.rawResist;
}

function weaponOptions(selected) {
  return WEAPON_PEN
    .map(([weapon, pen]) => `<option value="${weapon}"${weapon === selected ? " selected" : ""}>${weapon} (${formatPercent(pen, 0)})</option>`)
    .join("");
}

function renderSkillRows(result) {
  els.skillsBody.innerHTML = "";
  result.main.rows.forEach((row, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td><select data-skill="${index}" data-field="weapon">${weaponOptions(row.weapon)}</select></td>
      <td><input type="number" min="0" step="1" data-skill="${index}" data-field="tooltip" value="${row.tooltip}"></td>
      <td><input type="number" step="1" data-skill="${index}" data-field="passive" value="${formatPercentInput(row.passive)}"></td>
      <td><input type="number" step="1" data-skill="${index}" data-field="active" value="${formatPercentInput(row.active)}"></td>
      <td><output>${formatPercent(row.damageBuff)}</output></td>
      <td><output>${formatPercent(row.weaponPen)}</output></td>
      <td><output>${formatNumber(row.minDamage, 0)}</output></td>
      <td><output>${formatNumber(row.sequentialDamage, 0)}</output></td>
    `;
    els.skillsBody.appendChild(tr);
  });
}

function updateSkillRowOutputs(result) {
  [...els.skillsBody.querySelectorAll("tr")].forEach((tr, index) => {
    const row = result.main.rows[index];
    if (!row) return;
    const outputs = tr.querySelectorAll("output");
    outputs[0].textContent = formatPercent(row.damageBuff);
    outputs[1].textContent = formatPercent(row.weaponPen);
    outputs[2].textContent = formatNumber(row.minDamage, 0);
    outputs[3].textContent = formatNumber(row.sequentialDamage, 0);
  });
}

function renderTargets(result) {
  els.targetCompareBody.innerHTML = "";
  result.comparisons.forEach((target, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><input type="text" data-target="${index}" data-field="name" value="${target.name}"></td>
      <td><input type="number" min="0" step="1" data-target="${index}" data-field="rawResist" value="${target.rawResist}"></td>
      <td><output>${formatNumber(target.result.targetResist, 1)}</output></td>
      <td><output>${formatNumber(target.result.appliedPierce, 1)}</output></td>
      <td><output>${formatNumber(target.result.finalResist, 1)}</output></td>
      <td><output>${formatNumber(target.result.minTotal, 0)}</output></td>
      <td><output>${formatNumber(target.result.sequentialTotal, 0)}</output></td>
      <td><button type="button" data-remove-target="${index}" ${target.locked ? "disabled" : ""}>${t("remove")}</button></td>
    `;
    els.targetCompareBody.appendChild(row);
  });
}

function updateTargetOutputs(result) {
  [...els.targetCompareBody.querySelectorAll("tr")].forEach((tr, index) => {
    const target = result.comparisons[index];
    if (!target) return;
    const outputs = tr.querySelectorAll("output");
    outputs[0].textContent = formatNumber(target.result.targetResist, 1);
    outputs[1].textContent = formatNumber(target.result.appliedPierce, 1);
    outputs[2].textContent = formatNumber(target.result.finalResist, 1);
    outputs[3].textContent = formatNumber(target.result.minTotal, 0);
    outputs[4].textContent = formatNumber(target.result.sequentialTotal, 0);
  });
}

function renderSummary(result) {
  const main = result.main;
  const gap = main.minTotal > 0 ? main.sequentialTotal / main.minTotal - 1 : 0;

  document.querySelector("#sequentialDamage").textContent = formatNumber(main.sequentialTotal, 0);
  document.querySelector("#clapMeta").textContent = `${formatNumber(main.attackerCount)} ${t("attackers")}, ${formatNumber(main.active.length)} ${t("dpsRows")}`;
  document.querySelector("#minDamage").textContent = formatNumber(main.minTotal, 0);
  document.querySelector("#damageGap").textContent = `${formatPercent(gap)} ${t("vsMin")}`;
  document.querySelector("#finalResist").textContent = formatNumber(main.finalResist, 1);
  document.querySelector("#appliedPierce").textContent = `${t("appliedPierce")}: ${formatNumber(main.appliedPierce, 1)} / ${formatNumber(main.targetResist, 1)}`;
  document.querySelector("#attackerCount").textContent = formatNumber(main.attackerCount);
  document.querySelector("#disarrayDebuff").textContent = formatPercent(main.disarrayDebuff);
  document.querySelector("#aoeBuff").textContent = formatPercent(main.aoeBuff);
  document.querySelector("#resilienceDebuff").textContent = formatPercent(main.resilienceDebuff);
  document.querySelector("#activeSkillCount").textContent = `${main.active.length} ${t("active")}`;
}

function prepareCanvas(canvas) {
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = Math.max(1, Math.floor(rect.width * dpr));
  canvas.height = Math.max(1, Math.floor(rect.height * dpr));
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, width: rect.width, height: rect.height };
}

function drawDamageChart(result) {
  const { ctx, width, height } = prepareCanvas(els.damageCanvas);
  const values = result.comparisons;
  const max = Math.max(...values.flatMap((item) => [item.result.minTotal, item.result.sequentialTotal]), 1);
  const padding = { top: 62, right: 28, bottom: 74, left: 58 };
  const plotW = width - padding.left - padding.right;
  const plotH = height - padding.top - padding.bottom;
  const groupW = plotW / Math.max(values.length, 1);
  const barW = Math.max(10, Math.min(30, groupW * 0.2));
  ctx.fillStyle = "#1b2024";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#343c42";
  ctx.beginPath();
  ctx.moveTo(padding.left, padding.top);
  ctx.lineTo(padding.left, padding.top + plotH);
  ctx.lineTo(padding.left + plotW, padding.top + plotH);
  ctx.stroke();

  values.forEach((item, index) => {
    const center = padding.left + groupW * index + groupW / 2;
    const baseY = padding.top + plotH;
    const minH = plotH * (item.result.minTotal / max);
    const seqH = plotH * (item.result.sequentialTotal / max);
    ctx.fillStyle = "#d8614b";
    ctx.fillRect(center - barW - 4, baseY - minH, barW, minH);
    ctx.fillStyle = "#63b978";
    ctx.fillRect(center + 4, baseY - seqH, barW, seqH);
    drawLabelBox(ctx, formatNumber(item.result.minTotal, 0), center - barW / 2 - 4, baseY - minH - 16);
    drawLabelBox(ctx, formatNumber(item.result.sequentialTotal, 0), center + barW / 2 + 4, baseY - seqH - 16);
    ctx.fillStyle = "#aeb8b2";
    ctx.font = "700 12px system-ui";
    ctx.textAlign = "center";
    ctx.fillText(item.name, center, baseY + 24);
  });
  drawLegend(ctx, padding.left, 22);
}

function drawSequenceChart(result) {
  const { ctx, width, height } = prepareCanvas(els.sequenceCanvas);
  const rows = result.main.rows.filter((row) => row.tooltip > 0);
  const max = Math.max(...rows.flatMap((row) => [row.minDamage, row.sequentialDamage]), 1);
  const padding = { top: 70, right: 34, bottom: 58, left: 56 };
  const plotW = width - padding.left - padding.right;
  const plotH = height - padding.top - padding.bottom;
  const groupW = plotW / Math.max(rows.length, 1);
  const barW = Math.max(8, Math.min(24, groupW * 0.2));

  ctx.fillStyle = "#1b2024";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#343c42";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padding.left, padding.top);
  ctx.lineTo(padding.left, padding.top + plotH);
  ctx.lineTo(padding.left + plotW, padding.top + plotH);
  ctx.stroke();

  rows.forEach((row, index) => {
    const center = padding.left + groupW * index + groupW / 2;
    const minH = plotH * (row.minDamage / max);
    const seqH = plotH * (row.sequentialDamage / max);
    const baseY = padding.top + plotH;
    ctx.fillStyle = "#d8614b";
    ctx.fillRect(center - barW - 3, baseY - minH, barW, minH);
    ctx.fillStyle = "#63b978";
    ctx.fillRect(center + 3, baseY - seqH, barW, seqH);
    ctx.fillStyle = "#aeb8b2";
    ctx.font = "700 12px system-ui";
    ctx.textAlign = "center";
    ctx.fillText(`#${index + 1}`, center, baseY + 20);
    const minPct = result.main.minTotal > 0 ? row.minDamage / result.main.minTotal : 0;
    const seqPct = result.main.sequentialTotal > 0 ? row.sequentialDamage / result.main.sequentialTotal : 0;
    ctx.fillStyle = "#eef2f0";
    drawLabelBox(ctx, `${formatNumber(row.minDamage, 0)} / ${formatPercent(minPct, 0)}`, center - groupW * 0.18, Math.max(34, baseY - minH - 22));
    drawLabelBox(ctx, `${formatNumber(row.sequentialDamage, 0)} / ${formatPercent(seqPct, 0)}`, center + groupW * 0.18, Math.max(48, baseY - seqH - 10));
  });

  drawLegend(ctx, padding.left, 18);
}

function drawLabelBox(ctx, text, x, y) {
  ctx.font = "700 10px system-ui";
  const metrics = ctx.measureText(text);
  const w = metrics.width + 10;
  const h = 18;
  const boxX = x - w / 2;
  const boxY = y - h / 2;
  ctx.fillStyle = "rgba(10, 13, 15, 0.82)";
  ctx.strokeStyle = "rgba(238, 242, 240, 0.18)";
  ctx.lineWidth = 1;
  ctx.fillRect(boxX, boxY, w, h);
  ctx.strokeRect(boxX, boxY, w, h);
  ctx.fillStyle = "#eef2f0";
  ctx.textAlign = "center";
  ctx.fillText(text, x, y + 4);
}

function drawLegend(ctx, x, y) {
  ctx.textAlign = "left";
  ctx.fillStyle = "#d8614b";
  ctx.fillRect(x, y, 10, 10);
  ctx.fillStyle = "#eef2f0";
  ctx.font = "700 12px system-ui";
  ctx.fillText("Min", x + 16, y + 9);
  ctx.fillStyle = "#63b978";
  ctx.fillRect(x + 70, y, 10, 10);
  ctx.fillStyle = "#eef2f0";
  ctx.fillText("Sequancial", x + 86, y + 9);
}

function applyTranslations() {
  document.documentElement.lang = state.language;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  els.languageButton.textContent = t("languageButton");
  document.querySelector("#versionText").textContent = VERSION;
}

function render(rebuildSkills = false) {
  syncInputs();
  applyTranslations();
  const result = calculate(state);
  if (rebuildSkills || els.skillsBody.children.length !== result.main.rows.length) {
    renderSkillRows(result);
  } else {
    updateSkillRowOutputs(result);
  }
  if (rebuildSkills || els.targetCompareBody.children.length !== result.comparisons.length) {
    renderTargets(result);
  } else {
    updateTargetOutputs(result);
  }
  renderSummary(result);
  drawDamageChart(result);
  drawSequenceChart(result);
}

function bindEvents() {
  const numericBindings = [
    ["supportTank", "supportTank"],
    ["enemyDisarray", "enemyDisarray"],
    ["myDisarray", "myDisarray"],
    ["clappedEnemy", "clappedEnemy"],
    ["pierce", "pierce"],
    ["targetResist", "rawResist"],
  ];
  numericBindings.forEach(([elementKey, stateKey]) => {
    els[elementKey].addEventListener("input", (event) => {
      state[stateKey] = numberValue(event.target.value);
      render();
    });
  });

  ["resistPotion", "avaOmelette", "basilisk"].forEach((key) => {
    els[key].addEventListener("change", (event) => {
      state[key] = event.target.value;
      render();
    });
  });

  els.skillsBody.addEventListener("input", updateSkill);
  els.skillsBody.addEventListener("change", updateSkill);
  els.targetCompareBody.addEventListener("input", updateTarget);
  els.targetCompareBody.addEventListener("click", removeTarget);

  els.languageButton.addEventListener("click", () => {
    state.language = state.language === "ko" ? "en" : "ko";
    render(true);
  });

  els.resetButton.addEventListener("click", () => {
    state = structuredClone(DEFAULT_STATE);
    render(true);
  });

  els.addSkillButton.addEventListener("click", () => {
    state.skills.push({ weapon: "Non of them", tooltip: 0, passive: 0, active: 0 });
    render(true);
  });

  els.addTargetButton.addEventListener("click", () => {
    state.targets.push({ name: state.language === "ko" ? "추가 타입" : "Custom", rawResist: state.rawResist, locked: false });
    render();
  });

  window.addEventListener("resize", () => {
    const result = calculate(state);
    drawDamageChart(result);
    drawSequenceChart(result);
  });
}

function updateSkill(event) {
  const input = event.target.closest("[data-skill]");
  if (!input) return;
  const index = Number(input.dataset.skill);
  const field = input.dataset.field;
  state.skills[index][field] = field === "weapon" ? input.value : normalizeSkillInput(field, input.value);
  render(field === "weapon");
}

function normalizeSkillInput(field, value) {
  const parsed = numberValue(value);
  return field === "passive" || field === "active" ? parsed / 100 : parsed;
}

function formatPercentInput(value) {
  return Number.isInteger(value * 100) ? String(value * 100) : String(Number((value * 100).toFixed(2)));
}

function updateTarget(event) {
  const input = event.target.closest("[data-target]");
  if (!input) return;
  const index = Number(input.dataset.target);
  const field = input.dataset.field;
  state.targets[index][field] = field === "name" ? input.value : numberValue(input.value);
  render();
}

function removeTarget(event) {
  const button = event.target.closest("[data-remove-target]");
  if (!button) return;
  const index = Number(button.dataset.removeTarget);
  if (state.targets[index]?.locked) return;
  state.targets.splice(index, 1);
  render();
}

function initOptions() {
  els.resistPotion.innerHTML = RESIST_POTIONS
    .map(([tier, buff]) => `<option value="${tier}">T${tier} (${formatPercent(buff, 1)})</option>`)
    .join("");
  els.avaOmelette.innerHTML = AVA_OMELETTES
    .map(([tier, buff]) => `<option value="${tier}">T${tier} (${formatPercent(buff, 1)})</option>`)
    .join("");
  els.basilisk.innerHTML = BASILISK_DEBUFFS
    .map(([name, debuff]) => `<option value="${name}">${name} (${formatPercent(debuff, 1)})</option>`)
    .join("");
}

initOptions();
bindEvents();
render(true);

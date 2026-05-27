// Paper registry and renderer.
//
// Design mirrors coauthors.js. Each Paper has a stable kebab-case id
// plus fields for title, author list, venue, thumbnail, links, and
// optional award. A "selected" flag controls inclusion on the home
// page; the full publications page renders every entry.
//
// authors is an array of tokens. Each token is either:
//   "self"  -> rendered as <strong>Yiwei Zhao</strong>
//   "<id>"  -> rendered as <span data-coauthor="<id>">Full Name</span>,
//              where Full Name is looked up in the COAUTHORS registry
//              from coauthors.js. The span is then linkified by the
//              coauthor auto-linker after rendering.
//
// Each <ol class="publication-list" data-pubs="..."> is populated
// from this registry. data-pubs="selected" renders only entries with
// selected:true; data-pubs="full" renders every entry in registration
// order. Registry is ordered newest first.
//
// Requires coauthors.js to be loaded first.

class Paper {
  constructor({ id, title, authors, venueTag, venueFull, thumbnail, links = [], award = null, selected = false, toAppear = false }) {
    this.id = id;
    this.title = title;
    this.authors = authors;
    this.venueTag = venueTag;
    this.venueFull = venueFull;
    const m = venueFull.match(/\b(20\d\d)\b/);
    this.year = m ? parseInt(m[1]) : 0;
    this.thumbnail = thumbnail;
    this.links = links;
    this.award = award;
    this.selected = selected;
    // toAppear: paper is accepted but not yet published. Renders a
    // muted "[To Appear]" placeholder in place of the links block.
    this.toAppear = toAppear;
  }
}

const PAPERS = [];
function registerPaper(opts) {
  PAPERS.push(new Paper(opts));
}

// ===== Registry (newest first) =====

registerPaper({
  id: "pim-scheduling",
  title: "Non-Clairvoyant Scheduling for Processing-in-Memory",
  authors: ["hongbo-kang", "self", "kunal-agrawal", "yongwei-wu", "phillip-b-gibbons"],
  venueTag:  "SPAA",
  venueFull: "38th ACM Symposium on Parallelism in Algorithms and Architectures, 2026",
  thumbnail: "assets/papers/2026-SPAA-PIM-Scheduling.png",
  links: [
    { label: "Paper", url: "https://doi.org/10.1145/3816782.3819200" },
    { label: "Code",  url: "https://github.com/cmuparlay/PIM-Scheduling" },
  ],
  selected: true,
});

registerPaper({
  id: "pim-zd-tree",
  title: "PIM-zd-tree: A Fast Space-Partitioning Index Leveraging Processing-In-Memory",
  authors: ["self", "hongbo-kang", "ziyang-men", "yan-gu", "guy-e-blelloch", "laxman-dhulipala", "charles-mcguffey", "phillip-b-gibbons"],
  venueTag:  "PPoPP",
  venueFull: "31st ACM SIGPLAN Annual Symposium on Principles and Practice of Parallel Programming, 2026",
  thumbnail: "assets/papers/2026-PPoPP-PIM-zd.png",
  links: [
    { label: "Paper", url: "https://doi.org/10.1145/3774934.3786411" },
    { label: "Code",  url: "https://github.com/cmuparlay/PIM-zd-tree" },
  ],
  selected: true,
});

registerPaper({
  id: "pim-kd",
  title: "Optimal Batch-Dynamic kd-trees for Processing-In-Memory with Applications",
  authors: ["self", "hongbo-kang", "yan-gu", "guy-e-blelloch", "laxman-dhulipala", "charles-mcguffey", "phillip-b-gibbons"],
  venueTag:  "SPAA",
  venueFull: "37th ACM Symposium on Parallelism in Algorithms and Architectures, 2025",
  thumbnail: "assets/papers/2025-SPAA-PIM-kd.png",
  links: [
    { label: "Paper", url: "https://doi.org/10.1145/3694906.3743318" },
  ],
  selected: true,
});

registerPaper({
  id: "oltpim",
  title: "No Cap, This Memory Slaps: Breaking Through the Memory Wall of Transactional Database Systems with Processing-in-Memory",
  authors: ["hyoungjoo-kim", "self", "andrew-pavlo", "phillip-b-gibbons"],
  venueTag:  "VLDB",
  venueFull: "Proceedings of the VLDB Endowment, Vol.18, No.11, 2025",
  thumbnail: "assets/papers/2025-VLDB-OLTPIM.png",
  links: [
    { label: "Paper", url: "https://doi.org/10.14778/3749646.3749690" },
    { label: "Code",  url: "https://github.com/hyoungjook/OLTPim" },
  ],
  selected: true,
});

registerPaper({
  id: "h4h",
  title: "H4H: Hybrid Convolution-Transformer Architecture Search for NPU-CIM Heterogeneous Systems for AR/VR Applications",
  authors: ["self", "jinhui-chen", "sai-qian-zhang", "syed-shakib-sarwar", "kleber-stangherlin", "jorge-gomez", "jae-sun-seo", "barbara-de-salvo", "chiao-liu", "phillip-b-gibbons", "ziyun-li"],
  venueTag:  "ASP-DAC",
  venueFull: "30th Asia and South Pacific Design Automation Conference, 2025",
  thumbnail: "assets/papers/2025-ASPDAC-H4H.png",
  links: [
    { label: "Paper",   url: "https://doi.org/10.1145/3658617.3697627" },
    { label: "arXiv",   url: "https://arxiv.org/abs/2410.08326" },
    { label: "Slides",  url: "https://www.aspdac.com/aspdac2025/archive/pdf/7E-3.pdf" },
    { label: "HOPC'25", url: "https://doi.org/10.1145/3746238.3746241" },
  ],
  selected: true,
});

registerPaper({
  id: "pim-trie",
  title: "PIM-trie: A Skew-Resistant Trie for Processing-in-Memory",
  authors: ["hongbo-kang", "self", "guy-e-blelloch", "laxman-dhulipala", "yan-gu", "charles-mcguffey", "phillip-b-gibbons"],
  venueTag:  "SPAA",
  venueFull: "35th ACM Symposium on Parallelism in Algorithms and Architectures, 2023",
  thumbnail: "assets/papers/2023-SPAA-PIM-trie.png",
  links: [
    { label: "Paper", url: "https://doi.org/10.1145/3558481.3591070" },
  ],
  selected: true,
});

registerPaper({
  id: "pim-tree",
  title: "PIM-tree: A Skew-resistant Index for Processing-in-Memory",
  authors: ["hongbo-kang", "self", "guy-e-blelloch", "laxman-dhulipala", "yan-gu", "charles-mcguffey", "phillip-b-gibbons"],
  venueTag:  "VLDB",
  venueFull: "Proceedings of the VLDB Endowment, Vol.16, No.4, 2023",
  thumbnail: "assets/papers/2022-VLDB-PIM-tree.png",
  links: [
    { label: "Paper",    url: "https://doi.org/10.14778/3574245.3574275" },
    { label: "arXiv",    url: "https://arxiv.org/abs/2211.10516" },
    { label: "Code",     url: "https://github.com/cmuparlay/PIM-tree" },
    { label: "HOPC'23",  url: "https://doi.org/10.1145/3597635.3598029" },
    { label: "VLDBJ'25", url: "https://doi.org/10.1007/s00778-025-00937-5" },
  ],
  award: {
    text: "Best Paper Runner-up in VLDB 2023.",
    url:  "https://vldb.org/2023/?conference-awards",
  },
  selected: true,
});

registerPaper({
  id: "psqueeze",
  title: "Generic and Robust Root Cause Localization for Multi-dimensional Data in Online Service Systems",
  authors: ["zeyan-li", "junjie-chen", "yihao-chen", "chengyang-luo", "self", "yongqian-sun", "kaixin-sui", "xiping-wang", "dapeng-liu", "xing-jin", "qi-wang", "dan-pei"],
  venueTag:  "JSS",
  venueFull: "Journal of Systems and Software, Vol. 203, 111748, 2023",
  thumbnail: "assets/papers/2023-JSS-psqueeze.png",
  links: [
    { label: "Paper", url: "https://doi.org/10.1016/j.jss.2023.111748" },
    { label: "arXiv", url: "https://arxiv.org/abs/2305.03331" },
    { label: "Code",  url: "https://github.com/NetManAIOps/PSqueeze" },
  ],
});

registerPaper({
  id: "squeeze",
  title: "Generic and Robust Localization of Multi-dimensional Root Causes",
  authors: ["zeyan-li", "chengyang-luo", "self", "yongqian-sun", "kaixin-sui", "xiping-wang", "dapeng-liu", "xing-jin", "qi-wang", "dan-pei"],
  venueTag:  "ISSRE",
  venueFull: "IEEE 30th International Symposium on Software Reliability Engineering, 2019",
  thumbnail: "assets/papers/2019-ISSRE-Squeeze.png",
  links: [
    { label: "Paper",  url: "https://doi.org/10.1109/ISSRE.2019.00015" },
    { label: "Slides", url: "https://netman.aiops.org/wp-content/uploads/2019/10/Squeeze-ISSRE2019_v2.pdf" },
    { label: "Code",   url: "https://github.com/NetManAIOps/Squeeze" },
  ],
});

// ===== Renderer =====
//
// Walks each <ol class="publication-list" data-pubs="..."> and
// appends one <li class="publication-item"> per paper. Author tokens
// are emitted as <span data-coauthor="..."> so the coauthor linkifier
// (loaded earlier, scheduled on DOMContentLoaded) replaces them with
// real <a> tags after this script finishes inserting them.

function renderAuthors(authorTokens) {
  const parts = authorTokens.map(tok => {
    if (tok === "self") return "<strong>Yiwei Zhao</strong>";
    const c = (typeof COAUTHORS !== "undefined") ? COAUTHORS[tok] : null;
    const fullName = c ? c.fullName : tok;
    return `<span data-coauthor="${tok}">${fullName}</span>`;
  });
  return parts.join(", ") + ".";
}

function renderPaper(p) {
  const li = document.createElement("li");
  li.className = "publication-item";

  const linksHTML = p.toAppear
    ? `<span class="pub-toappear">[To Appear]</span>`
    : p.links.map(l =>
        `<a href="${l.url}" target="_blank" rel="noopener noreferrer">[${l.label}]</a>`
      ).join("\n            ");

  const awardHTML = p.award
    ? `\n          <p class="pub-award"><a href="${p.award.url}" target="_blank" rel="noopener noreferrer">${p.award.text}</a></p>`
    : "";

  li.innerHTML =
    `\n        <div class="pub-thumbnail">` +
    `\n          <img src="${p.thumbnail}" alt="Paper thumbnail">` +
    `\n        </div>` +
    `\n        <div class="pub-details">` +
    `\n          <p class="pub-title">${p.title}</p>` +
    `\n          <p class="pub-authors">${renderAuthors(p.authors)}</p>` +
    `\n          <p class="pub-venue"><span class="pub-venue-tag">${p.venueTag}</span> ${p.venueFull}</p>` +
    `\n          <div class="pub-links">` +
    `\n            ${linksHTML}` +
    `\n          </div>` +
    awardHTML +
    `\n        </div>\n      `;
  return li;
}

function buildYearNav(ol) {
  const dividers = ol.querySelectorAll(".pub-year-divider");
  if (!dividers.length) return;

  const nav = document.createElement("nav");
  nav.className = "pub-year-nav";
  nav.setAttribute("aria-label", "Jump to year");

  dividers.forEach((div, i) => {
    const a = document.createElement("a");
    a.href = "#" + div.id;
    a.textContent = div.textContent;
    if (i === 0) a.classList.add("active");
    nav.appendChild(a);
  });

  document.body.appendChild(nav);

  const navH = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--nav-height")
  ) || 56;
  let ticking = false;

  function updateActive() {
    const threshold = window.scrollY + navH + 40;
    let activeId = null;
    dividers.forEach(div => {
      if (div.getBoundingClientRect().top + window.scrollY <= threshold) {
        activeId = div.id;
      }
    });
    nav.querySelectorAll("a").forEach(a => {
      a.classList.toggle("active", a.getAttribute("href") === "#" + activeId);
    });
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => { updateActive(); ticking = false; });
      ticking = true;
    }
  }, { passive: true });

  updateActive();
}

(function renderPapers() {
  document.querySelectorAll("ol.publication-list[data-pubs]").forEach(ol => {
    const mode = ol.getAttribute("data-pubs");
    const list = mode === "selected" ? PAPERS.filter(p => p.selected) : PAPERS;

    if (mode === "full") {
      let lastYearKey = null;
      list.forEach(p => {
        const yearKey = p.year >= 2023 ? String(p.year) : "earlier";
        if (yearKey !== lastYearKey) {
          lastYearKey = yearKey;
          const divider = document.createElement("li");
          divider.className = "pub-year-divider";
          divider.id = "pub-year-" + yearKey;
          divider.textContent = p.year >= 2023 ? String(p.year) : "Earlier";
          ol.appendChild(divider);
        }
        ol.appendChild(renderPaper(p));
      });
      buildYearNav(ol);
    } else {
      list.forEach(p => ol.appendChild(renderPaper(p)));
    }
  });
})();

// Co-author registry and auto-linker.
//
// Design mirrors a C++-style class. Each Coauthor object has six
// fields: id (a stable kebab-case slug), fullName, plus four URLs --
// personalSite, institutionalSite, googleScholar, linkedin.
//
// resolveLink() returns the highest-priority non-empty URL using the
// order: personalSite > institutionalSite > googleScholar > linkedin.
// Returns null if all four URLs are empty.
//
// Each co-author occurrence in the HTML is marked explicitly with
// <span data-coauthor="ID">Full Name</span>, where ID is the
// registered slug. The linkifier walks every [data-coauthor] element
// and, when the registry entry resolves to a real URL, replaces the
// span with <a class="coauthor-link" target="_blank" href=URL>name</a>.
// If two distinct people happened to share the same English spelling,
// they get different ids -- so the markup disambiguates them, not the
// text. Names whose entry has all-empty URLs stay as plain <span>
// elements with no styling, no cursor change, no hover hint.
//
// Registry is kept in alphabetical order by family name.

class Coauthor {
  constructor({ id, fullName, personalSite = "", institutionalSite = "", googleScholar = "", linkedin = "" }) {
    this.id = id;
    this.fullName = fullName;
    this.personalSite = personalSite;
    this.institutionalSite = institutionalSite;
    this.googleScholar = googleScholar;
    this.linkedin = linkedin;
  }

  resolveLink() {
    return this.personalSite || this.institutionalSite || this.googleScholar || this.linkedin || null;
  }
}

const COAUTHORS = {};
function registerCoauthor(opts) {
  const c = new Coauthor(opts);
  COAUTHORS[c.id] = c;
}

// ===== Registry (alphabetical by family name) =====

registerCoauthor({
  id: "kunal-agrawal",
  fullName: "Kunal Agrawal",
  institutionalSite: "https://engineering.washu.edu/faculty/Kunal-Agrawal.html",
  googleScholar:     "https://scholar.google.com/citations?user=W362rUwAAAAJ&hl=en",
});

registerCoauthor({
  id: "guy-e-blelloch",
  fullName: "Guy E. Blelloch",
  personalSite:      "https://www.cs.cmu.edu/~guyb/",
  institutionalSite: "https://csd.cmu.edu/people/faculty/guy-blelloch",
  googleScholar:     "https://scholar.google.com/citations?user=Z6nLCukAAAAJ&hl=en",
  linkedin:          "https://www.linkedin.com/in/guy-blelloch-570725a/",
});

registerCoauthor({
  id: "jinhui-chen",
  fullName: "Jinhui Chen",
  linkedin: "https://www.linkedin.com/in/chen-jinhui-bressanone/",
});

registerCoauthor({
  id: "junjie-chen",
  fullName: "Junjie Chen",
  personalSite:      "https://sites.google.com/site/junjiechen08/",
  institutionalSite: "https://tjusail.github.io/people/chenjunjie/index.html",
  googleScholar:     "https://scholar.google.com/citations?user=lj1g920AAAAJ&hl=en",
});

registerCoauthor({
  id: "yihao-chen",
  fullName: "Yihao Chen",
  personalSite:  "https://porcupineandrew.github.io/homepage/",
  googleScholar: "https://scholar.google.com/citations?user=HcArcV8AAAAJ",
});

registerCoauthor({
  id: "barbara-de-salvo",
  fullName: "Barbara De Salvo",
  googleScholar: "https://scholar.google.com/citations?user=tBC7GHUAAAAJ&hl=en",
  linkedin:      "https://www.linkedin.com/in/barbara-de-salvo-82b42725/",
});

registerCoauthor({
  id: "laxman-dhulipala",
  fullName: "Laxman Dhulipala",
  personalSite:      "https://ldhulipala.github.io/",
  institutionalSite: "https://www.umiacs.umd.edu/people/laxman",
  googleScholar:     "https://scholar.google.com/citations?user=TJSHa2IAAAAJ&hl=en",
});

registerCoauthor({
  id: "phillip-b-gibbons",
  fullName: "Phillip B. Gibbons",
  personalSite:      "https://www.cs.cmu.edu/~gibbons/",
  institutionalSite: "https://www.csd.cmu.edu/people/faculty/phillip-gibbons",
  googleScholar:     "https://scholar.google.com/citations?user=F9kqUXkAAAAJ&hl=en",
  linkedin:          "https://www.linkedin.com/in/phillip-gibbons-b109b5121/",
});

registerCoauthor({
  id: "jorge-gomez",
  fullName: "Jorge Gomez",
  googleScholar: "https://scholar.google.com/citations?user=4quSKooAAAAJ&hl=es",
  linkedin:      "https://www.linkedin.com/in/jorge-tom%C3%A1s-g%C3%B3mez-mir-a4761292/",
});

registerCoauthor({
  id: "yan-gu",
  fullName: "Yan Gu",
  personalSite:      "https://www.cs.ucr.edu/~ygu/",
  institutionalSite: "https://profiles.ucr.edu/app/home/profile/ygu",
  googleScholar:     "https://scholar.google.com/citations?user=BmshmX8AAAAJ&hl=en",
});

registerCoauthor({ id: "xing-jin", fullName: "Xing Jin" });

registerCoauthor({
  id: "hongbo-kang",
  fullName: "Hongbo Kang",
  institutionalSite: "https://madsys.cs.tsinghua.edu.cn/author/hongbo-kang/",
  googleScholar:     "https://scholar.google.com/citations?user=PtxGicMAAAAJ&hl=en",
});

registerCoauthor({
  id: "hyoungjoo-kim",
  fullName: "Hyoungjoo Kim",
  personalSite:      "https://hyoungjook.github.io/",
  institutionalSite: "https://db.cs.cmu.edu/people/hyoungjoo-kim/",
  googleScholar:     "https://scholar.google.com/citations?user=sYhlQ1YAAAAJ&hl=en",
  linkedin:          "https://www.linkedin.com/in/hyoungjoo-kim-546986194/",
});

registerCoauthor({
  id: "zeyan-li",
  fullName: "Zeyan Li",
  personalSite:  "https://www.lizeyan.me/",
  googleScholar: "https://scholar.google.com/citations?user=osylUIoAAAAJ",
});

registerCoauthor({
  id: "ziyun-li",
  fullName: "Ziyun Li",
  googleScholar: "https://scholar.google.com/citations?user=rd9OFHwAAAAJ&hl=en",
  linkedin: "https://www.linkedin.com/in/ziyun-li-80136886/",
});

registerCoauthor({
  id: "chiao-liu",
  fullName: "Chiao Liu",
  googleScholar: "https://scholar.google.com/citations?user=2snvYhsAAAAJ&hl=en",
  linkedin:      "https://www.linkedin.com/in/chiao-liu-3b519314/",
});
registerCoauthor({
  id: "dapeng-liu",
  fullName: "Dapeng Liu",
  institutionalSite: "https://netman.aiops.org/people/dapeng-liu/",
});
registerCoauthor({
  id: "yongpan-liu",
  fullName: "Yongpan Liu",
  personalSite:  "http://www.escience.cn/people/yongpanliu/index.html",
  googleScholar: "https://scholar.google.com/citations?user=zZ1QL4YAAAAJ&hl=en",
});

registerCoauthor({ id: "chengyang-luo", fullName: "Chengyang Luo" });

registerCoauthor({
  id: "charles-mcguffey",
  fullName: "Charles McGuffey",
  googleScholar: "https://scholar.google.com/citations?user=V_BqDpwAAAAJ&hl=en",
  linkedin:      "https://www.linkedin.com/in/charles-mcguffey-2587bbaa/",
});

registerCoauthor({
  id: "ziyang-men",
  fullName: "Ziyang Men",
  personalSite:  "https://www.cs.ucr.edu/~zmen002/",
  googleScholar: "https://scholar.google.com/citations?user=KAQzfdoAAAAJ&hl=en",
  linkedin:      "https://www.linkedin.com/in/ziyang-men-427429221/",
});

registerCoauthor({
  id: "andrew-pavlo",
  fullName: "Andrew Pavlo",
  personalSite:      "https://www.cs.cmu.edu/~pavlo/",
  institutionalSite: "https://csd.cmu.edu/people/faculty/andrew-pavlo",
  googleScholar:     "https://scholar.google.com/citations?user=u1UDm4wAAAAJ&hl=en",
});

registerCoauthor({
  id: "dan-pei",
  fullName: "Dan Pei",
  personalSite:  "https://netman.aiops.org/~peidan/",
  institutionalSite: "https://www.cs.tsinghua.edu.cn/csen/info/1310/4359.htm",
  googleScholar: "https://scholar.google.com/citations?user=i_zA1VsAAAAJ&hl=en",
  linkedin:      "https://www.linkedin.com/in/dan-pei-6aaa254/",
});

registerCoauthor({
  id: "syed-shakib-sarwar",
  fullName: "Syed Shakib Sarwar",
  googleScholar:     "https://scholar.google.com/citations?user=dbOGRFoAAAAJ&hl=en",
  linkedin:          "https://www.linkedin.com/in/syedshakib/",
});

registerCoauthor({
  id: "jae-sun-seo",
  fullName: "Jae-sun Seo",
  personalSite:      "https://seo.ece.cornell.edu/professor/",
  institutionalSite: "https://tech.cornell.edu/people/jae-sun-seo/",
  googleScholar:     "https://scholar.google.com/citations?user=0eA8Fr8AAAAJ&hl=en",
  linkedin:          "https://www.linkedin.com/in/jae-sun-seo-21062717/",
});

registerCoauthor({
  id: "julian-shun",
  fullName: "Julian Shun",
  personalSite:      "https://people.csail.mit.edu/jshun/",
  institutionalSite: "https://www.csail.mit.edu/person/julian-shun",
  googleScholar:     "https://scholar.google.com/citations?user=BGh9WU4AAAAJ&hl=en",
});

registerCoauthor({
  id: "kleber-stangherlin",
  fullName: "Kleber Stangherlin",
  googleScholar: "https://scholar.google.com/citations?user=ccDp8goAAAAJ&hl=en",
});

registerCoauthor({
  id: "kaixin-sui",
  fullName: "Kaixin Sui",
  institutionalSite: "https://netman.aiops.org/people/kaixin-sui/",
  googleScholar:     "https://scholar.google.com/citations?user=UruxciEAAAAJ&hl=en",
});

registerCoauthor({
  id: "yongqian-sun",
  fullName: "Yongqian Sun",
  institutionalSite: "https://nkcs.iops.ai/yongqiansun/",
  googleScholar:     "https://scholar.google.com/citations?user=ZtEdSioAAAAJ&hl=en",
});

registerCoauthor({ id: "qi-wang", fullName: "Qi Wang" });
registerCoauthor({ id: "xiping-wang", fullName: "Xiping Wang" });

registerCoauthor({
  id: "yongwei-wu",
  fullName: "Yongwei Wu",
  personalSite:      "https://madsys.cs.tsinghua.edu.cn/~yongweiwu/",
  institutionalSite: "https://www.cs.tsinghua.edu.cn/csen/info/1300/4373.htm",
  googleScholar:     "https://scholar.google.com/citations?user=ld3axtkAAAAJ&hl=en",
});

registerCoauthor({
  id: "sai-qian-zhang",
  fullName: "Sai Qian Zhang",
  personalSite:      "https://www.saiqianzhang.com/",
  institutionalSite: "https://engineering.nyu.edu/faculty/sai-qian-zhang",
  googleScholar:     "https://scholar.google.com/citations?user=kcCZkTwAAAAJ",
  linkedin:          "https://www.linkedin.com/in/sai-qian-zhang-713214b5/",
});

// ===== Auto-linker =====
//
// Each <span data-coauthor="ID"> gets replaced with an <a> whose href
// comes from the registered Coauthor's resolveLink(). If the id is
// unknown OR the entry's URLs are all empty, the span is left intact,
// rendering as plain text with no visual or interactive hint.

function linkifyCoauthorSpan(span) {
  const id = span.getAttribute("data-coauthor");
  const c = COAUTHORS[id];
  if (!c) {
    // Unknown id -- leave the span as-is. Surfacing the warning helps
    // catch typos in markup without breaking the page.
    if (typeof console !== "undefined") {
      console.warn("Unknown data-coauthor id:", id);
    }
    return;
  }
  const url = c.resolveLink();
  if (!url) return;  // registered but no link available -> plain text

  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.className = "coauthor-link";
  a.textContent = span.textContent;
  span.replaceWith(a);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-coauthor]").forEach(linkifyCoauthorSpan);
});

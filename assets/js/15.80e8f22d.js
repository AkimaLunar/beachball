(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{366:function(e,t,s){"use strict";s.r(t);var a=s(25),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"version-groups"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#version-groups"}},[e._v("#")]),e._v(" Version Groups")]),e._v(" "),s("p",[e._v("By default, all packages in the repository are versioned based solely on the changes as specified by the change files. Developers are expected to create these change files along with the bump type for the packages as they go.")]),e._v(" "),s("p",[e._v("Some projects require bumping versions together so that the consumers really only need to remember one single version number when bumping related packages. The most famous of this strategy is Babel that versions all their related packages together with the locked step versioning.")]),e._v(" "),s("p",[s("code",[e._v("beachball")]),e._v(" strives to be automated and flexible, so it provides a concept of version groups. Whenever one of the packages of one of the packages inside a group is bumped, the entire group's packages will get bumped the same way.")]),e._v(" "),s("blockquote",[s("p",[e._v("Note: a package cannot belong to multiple groups - beachball will not allow its commands to work with that configuration")])]),e._v(" "),s("h3",{attrs:{id:"configuring-groups"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-groups"}},[e._v("#")]),e._v(" Configuring groups")]),e._v(" "),s("p",[e._v("In the "),s("a",{attrs:{href:"../overview/configuration"}},[e._v("configuration")]),e._v(" section, we discussed how to configure "),s("code",[e._v("beachball")]),e._v(". Here's an example of a config file named "),s("code",[e._v("beachball.config.js")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("bumpDeps")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("We can add a group by adding it to the configuration like this:")]),e._v(" "),s("div",{staticClass:"language-diff extra-class"},[s("pre",{pre:!0,attrs:{class:"language-diff"}},[s("code",[e._v("module.exports = {\n"),s("span",{pre:!0,attrs:{class:"token unchanged"}},[s("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),s("span",{pre:!0,attrs:{class:"token line"}},[e._v(" bumpDeps: true\n")])]),s("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[s("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),s("span",{pre:!0,attrs:{class:"token line"}},[e._v(" groups: [\n")]),s("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),s("span",{pre:!0,attrs:{class:"token line"}},[e._v("   {\n")]),s("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),s("span",{pre:!0,attrs:{class:"token line"}},[e._v('      name: "group name",\n')]),s("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),s("span",{pre:!0,attrs:{class:"token line"}},[e._v('      include: ["packages/groupfoo/*"],\n')]),s("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),s("span",{pre:!0,attrs:{class:"token line"}},[e._v('      exclude: ["packages/groupfoo/bar"]\n')]),s("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),s("span",{pre:!0,attrs:{class:"token line"}},[e._v("   }\n")]),s("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),s("span",{pre:!0,attrs:{class:"token line"}},[e._v(" ]\n")])]),e._v("}\n")])])]),s("p",[s("code",[e._v("beachball")]),e._v(" uses "),s("code",[e._v("minimatch")]),e._v(" to match which packages belong to which group via this configuration. In the above configuration, packages located inside "),s("code",[e._v("packages/groupfoo")]),e._v(" would be bumped together.")]),e._v(" "),s("blockquote",[s("p",[e._v("NOTE: Beachball does not guarantee currently that these packages have the same version number, but that it will be bumped at the same rate. This is an area of active development, so please consider submitting feature request issues to change its behavior with justifications")])])])}),[],!1,null,null,null);t.default=n.exports}}]);
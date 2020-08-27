(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{402:function(e,n,s){"use strict";s.r(n);var a=s(27),t=Object(a.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[e._v("#")]),e._v(" 字符串")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("set 覆盖写\nsetnx 不存在写\nsetex 覆盖写并设置过期时间（秒）\npsetex 覆盖写并设置过期时间（毫秒)\nget 获取\ngetset 返回旧值设置新值\nstrlen 值的长度\nappend 字符串尾部拼接值\nsetrange 从指定偏移量重写值\ngetrange 获取字符串指定区间（截取获取）\ninc 值增加1\nincrby 值增加指定值\nincrbyfloat 值增加指定浮点数\ndecr 值减少1\ndecrby 值减少指定值\nmset 批量设置键\nmget 批量获取键\nmsetnx 批量设置不存在的键\n")])])]),s("h2",{attrs:{id:"哈希表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#哈希表"}},[e._v("#")]),e._v(" 哈希表")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("hset 字段覆盖写值\nhsetnx 字段不覆盖写值\nhget 获取指定字段\nhexists 指定字段是否存在\nhdel 删除指定字段\nhlen 字段数量\nhstrlen 指定字段的长度\nhincrby 指定字段增加\nhincrbyfloat 指定字段增加浮点数\nhmset 批量设置指定字段值\nhmget 批量获取指定字段值\nhkeys 获取所有字段\nhvals 获取所有值\nhgetall 获取所有字段\n")])])]),s("h2",{attrs:{id:"列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#列表"}},[e._v("#")]),e._v(" 列表")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("lpush 列表头插入值\nlpushx 列表头插入值（必须存在）\nrpush 列表尾部插入值\nrpushx 列表尾部插入值（必须存在）\nlpop 列表头删除值\nrpop 列表尾部删除值\nrpoplposh 一个列表尾部删除添加到另一个列表头部\nlrem 删除指定数量元素\nllen 元素数量\nlindex 指定下边的元素\nlinsert 插入元素到指定元素的前后\nlset 修改指定位置的元素\nlrange 返回指定区间元素\nltrim 只保留指定区间的元素\nblpop 阻塞式头部弹出\nbrpop 阻塞式尾部弹出\nbrpoplpush 阻塞式一个列表尾部删除添加到另一个列表头部\n")])])]),s("h2",{attrs:{id:"集合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集合"}},[e._v("#")]),e._v(" 集合")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sadd 添加元素到集合，重复则忽略\nsismember 元素是否是其成员\nspop 移除返回一个随机元素\nsrandmenber 返回指定数量元素\nsrem 移除指定元素\nsmove 移动元素到指定集合\nscard 集合的元素数\nsmenbers 集合的全部成员\nsinter 集合交集\nsinterstore 集合交集并存储\nsunion 集合并集\nsunionstore 集合并集并存储\nsdiff 集合差集\nsdiffstore 集合差集并存储\n")])])]),s("h2",{attrs:{id:"有序集合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有序集合"}},[e._v("#")]),e._v(" 有序集合")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("zadd 添加数据\nzscore 返回指定成员分数\nzincrby 指定成员分数增加\nzcard 集合总数\nzcount 指定分数区间的数量 （-inf，+inf）\nzrange 指定区间的成员-增（0，-1）\nzrevrange 指定区间的成员-减（0，-1）\nzrangebyscore 指定分数的成员-增（-inf，+inf）\nzrevrangebyscore 指定分数的成员-减（-inf，+inf）\nzrank 指定成员的排名-增\nzrevrank 指定成员的排名-减\nzrem 删除指定成员\nzremrangebyrank 删除指定区间的成员\nzremrangebyscore 删除指定分数的成员\nzunionstore 集合取并集\nzinterstore 集合取交集\nzrangebylex 指定成员区间的成员\nzlexcount 指定成员区级数\nzremrangebylex 删除指定成员的成员\n")])])]),s("h2",{attrs:{id:"有效期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有效期"}},[e._v("#")]),e._v(" 有效期")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("expire 指定key过期时间（秒数）\npexpire 指定key过期时间（毫秒数)\nexpireat 指定key过期时间（秒时间戳）\npexpireat 指定key过期时间（毫秒时间戳）\nttl 返回剩余的过期时间（秒）\npttl 返回剩余过期时间（毫秒）\npersist 移除过期时间\n")])])]),s("h2",{attrs:{id:"key操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#key操作"}},[e._v("#")]),e._v(" key操作")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("exists key是否存在\ntype key类型\nrename 重命名（目标存在覆盖）\nreameex 重命名（目标不存时）\nmove 移动指定key到指定db\ndel 删除key\nrandomkey 随机返回一个key\ndbsize db中key的数量\nkeys 指定模式的key\nscan\nsort 返回列表、集合、有序集合排序后的元素\nflushdb 清空当前db的key\nflushall 清空所有db的key\nselect 切换指定库\nswapdb 兑换两个db\n")])])])])}),[],!1,null,null,null);n.default=t.exports}}]);
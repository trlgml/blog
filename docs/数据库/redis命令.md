## 字符串
```
set 覆盖写
setnx 不存在写
setex 覆盖写并设置过期时间（秒）
psetex 覆盖写并设置过期时间（毫秒)
get 获取
getset 返回旧值设置新值
strlen 值的长度
append 字符串尾部拼接值
setrange 从指定偏移量重写值
getrange 获取字符串指定区间（截取获取）
inc 值增加1
incrby 值增加指定值
incrbyfloat 值增加指定浮点数
decr 值减少1
decrby 值减少指定值
mset 批量设置键
mget 批量获取键
msetnx 批量设置不存在的键
```
## 哈希表
```
hset 字段覆盖写值
hsetnx 字段不覆盖写值
hget 获取指定字段
hexists 指定字段是否存在
hdel 删除指定字段
hlen 字段数量
hstrlen 指定字段的长度
hincrby 指定字段增加
hincrbyfloat 指定字段增加浮点数
hmset 批量设置指定字段值
hmget 批量获取指定字段值
hkeys 获取所有字段
hvals 获取所有值
hgetall 获取所有字段
```
## 列表
```
lpush 列表头插入值
lpushx 列表头插入值（必须存在）
rpush 列表尾部插入值
rpushx 列表尾部插入值（必须存在）
lpop 列表头删除值
rpop 列表尾部删除值
rpoplposh 一个列表尾部删除添加到另一个列表头部
lrem 删除指定数量元素
llen 元素数量
lindex 指定下边的元素
linsert 插入元素到指定元素的前后
lset 修改指定位置的元素
lrange 返回指定区间元素
ltrim 只保留指定区间的元素
blpop 阻塞式头部弹出
brpop 阻塞式尾部弹出
brpoplpush 阻塞式一个列表尾部删除添加到另一个列表头部
```
## 集合
```
sadd 添加元素到集合，重复则忽略
sismember 元素是否是其成员
spop 移除返回一个随机元素
srandmenber 返回指定数量元素
srem 移除指定元素
smove 移动元素到指定集合
scard 集合的元素数
smenbers 集合的全部成员
sinter 集合交集
sinterstore 集合交集并存储
sunion 集合并集
sunionstore 集合并集并存储
sdiff 集合差集
sdiffstore 集合差集并存储
```
## 有序集合
```
zadd 添加数据
zscore 返回指定成员分数
zincrby 指定成员分数增加
zcard 集合总数
zcount 指定分数区间的数量 （-inf，+inf）
zrange 指定区间的成员-增（0，-1）
zrevrange 指定区间的成员-减（0，-1）
zrangebyscore 指定分数的成员-增（-inf，+inf）
zrevrangebyscore 指定分数的成员-减（-inf，+inf）
zrank 指定成员的排名-增
zrevrank 指定成员的排名-减
zrem 删除指定成员
zremrangebyrank 删除指定区间的成员
zremrangebyscore 删除指定分数的成员
zunionstore 集合取并集
zinterstore 集合取交集
zrangebylex 指定成员区间的成员
zlexcount 指定成员区级数
zremrangebylex 删除指定成员的成员
```
## 有效期
```
expire 指定key过期时间（秒数）
pexpire 指定key过期时间（毫秒数)
expireat 指定key过期时间（秒时间戳）
pexpireat 指定key过期时间（毫秒时间戳）
ttl 返回剩余的过期时间（秒）
pttl 返回剩余过期时间（毫秒）
persist 移除过期时间
```
## key操作
```
exists key是否存在
type key类型
rename 重命名（目标存在覆盖）
reameex 重命名（目标不存时）
move 移动指定key到指定db
del 删除key
randomkey 随机返回一个key
dbsize db中key的数量
keys 指定模式的key
scan
sort 返回列表、集合、有序集合排序后的元素
flushdb 清空当前db的key
flushall 清空所有db的key
select 切换指定库
swapdb 兑换两个db
```




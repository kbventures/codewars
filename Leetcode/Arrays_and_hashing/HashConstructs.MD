Key Differences:
Feature Object Map WeakMap Set WeakSet
Key types String/Symbol Any Object only N/A Object only
Iterable Special methods Yes No Yes No
Size property No Yes No Yes No
Performance Fast Slower for small data - -
Garbage collection Normal Normal Weak Normal Weak

When to use which:
Use Object for simple key-value pairs when keys are strings/symbols
Use Map when you need keys of any type or ordered collections
Use WeakMap/WeakSet when you need memory-efficient collections with object keys
Use Set/WeakSet when you only need to track uniqueness rather than key-value pairs

Modern JavaScript (ES6+) typically favors Map over Object for pure hash/dictionary use cases due to its additional methods and flexibility with key types.

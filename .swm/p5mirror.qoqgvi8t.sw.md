---
title: p5mirror
---

bash scripts to copy your p5js editor projects (sketches + media) into your repo

Follow the instructions here, using a terminal app - eg. VS Code builtin terminal&nbsp;

<SwmPath>[README.md](/README.md)</SwmPath>

<SwmSnippet path="/README.md" line="33">

---

step 1 - clone p5mirror so you can stay up todate with changes.

```markdown
# clone this repo as folder p5mirror
```

---

</SwmSnippet>

<SwmSnippet path="/README.md" line="35">

---

step 2 - p5name is your p5js editor user name

```markdown
# create a new repo, named it p5mirror-p5name
```

---

</SwmSnippet>

<SwmSnippet path="/README.md" line="39">

---

step 3 - update .gitignore

```markdown
# in your preo p5mirror-p5name, add these file to .gitignore
```

---

</SwmSnippet>

<SwmSnippet path="README.md" line="51">

---

step 4 - run [build.sh](http://build.sh) shell script

```
../p5mirror/bin/build.sh --user p5name
```

---

</SwmSnippet>

<SwmSnippet path="/README.md" line="56">

---

run script to download all your projects as zip files

```markdown
sh downloads/gen/download.sh
```

---

</SwmSnippet>

<SwmSnippet path="/README.md" line="60">

---

run script to unzip the downloads

```markdown
sh downloads/gen/unzip.sh
```

---

</SwmSnippet>

<SwmSnippet path="/README.md" line="64">

---

run script to create index of all your projects with link back to p5js editor

```markdown
../p5mirror/bin/build-p5projects-index.sh --user p5name
```

---

</SwmSnippet>

Example output:

<SwmPath>[p5projects-index.md](/p5projects-index.md)</SwmPath>

&nbsp;

!!@ TODO: show how to use --limit to download only recently changed/added scripts. Or edit download.sh for selective download

&nbsp;

<SwmPath>[node/build.js](/node/build.js)</SwmPath>

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBcDVtaXJyb3IlM0ElM0Ftb2xhYi1pdHA=" repo-name="p5mirror"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>

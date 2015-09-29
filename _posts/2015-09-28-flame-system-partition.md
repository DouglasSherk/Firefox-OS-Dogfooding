---
layout: post
title: <span class="label label-danger">Ongoing</span> Flame /system partition OTA issues
type: issue
author: Doug Sherk (:drs)
---

Hello, foxfooders! We've run into a problem where the Flame /system partition
has run out space and we can no longer unpack OTA updates on it. This is
happening because OTA updates have grown in size recently. We're working on a
fix, which will probably involve shipping our next OTA update as a FOTA update.
This will sidestep the issue by not requiring unpacking on the /system
partition.

Work is being tracked in this bug:<br>
<a target="_blank" href="https://bugzilla.mozilla.org/show_bug.cgi?id=1199863"><strong>Bug 1199863</strong> - Update doesn't install properly possibly because of out of space issue on system partition</a>

We're not shipping updates for the Z3C during this time for two reasons: so that
parity is maintained between the Flame and Z3C builds, and because we've had
smoke test failures blocking us. We expect a fix in a few days. Thanks for your
patience.

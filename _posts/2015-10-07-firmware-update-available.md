---
layout: post
title: Firmware update available!
type: update
author: Naoki Hirata (:nhirata)
---

<span class="label label-warning">Note</span> The files linked to in this post are currently only available for employees.

Apologies for the long wait, the firmware update is located here: [Firmware Update](https://drive.google.com/a/mozilla.com/file/d/0B\_0LdM1CVycIUGdRRWtuMm9KMmM/view?usp=sharing)

The instructions on how to flash has been updated: [Flashing Instructions](https://mana.mozilla.org/wiki/display/PM/How+to+flash+the+FOTA)

This build is Monday's build + patches from [bug 1211883](https://bugzilla.mozilla.org/show_bug.cgi?id=1211883) and a backed out [bug 1211976](https://bugzilla.mozilla.org/show_bug.cgi?id=1211976).

To note, if you had heat issues while idle, you will want to flash this FOTA.
Heat issues while having intense graphics for a prolong amount of time is not
fixed with this build.

Someone pointed out to me, "Why am I not able to get this over-the-air?"

For clarification, there's still some implementation for the build/server side
that needs to be done before we get this over the air.  So it's a
not-so-OTA-FOTA build.

This build should not delete any of the data off your device and should update
the Gonk/Gecko/Gaia parts of the device. It's a temporary means to help update
the Gonk layer that was causing so many people heating issues while idle
(amongst a few other things).

With this fix, you should be able to turn on "Hardware Compositor" in Settings >
Developer if you wish. This will improve your battery life, and prevent some of
the heat issues that foxfooders have experienced.

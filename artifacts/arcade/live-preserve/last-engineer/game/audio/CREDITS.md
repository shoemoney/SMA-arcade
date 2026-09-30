# ShoeMoney: Last Engineer Audio Credits

## Current browser combat audio, September 25, 2026

The following MP3s replace the earlier weapon recordings or add new feedback. Reference clips
were supplied by the user. These entries record provenance; the historical CC0/Mixkit labels
below do not apply to these replacement clips.

| Current file | Source and processing |
|---|---|
| `sfx/pistol_shot.mp3` | [User pistol reference](https://www.youtube.com/watch?v=lGNwnstqAO4), single shot from 0.174s, trimmed and peak normalized. |
| `sfx/shotgun_blast.mp3` | [User shotgun reference](https://www.youtube.com/watch?v=GSLVp9zCdeg), blast from 3.683s; removed opening cocking and silence. |
| `sfx/rifle_shot.mp3` | [User rifle reference](https://www.youtube.com/watch?v=VRGGW4vLZAc), single shot from 2.528s, trimmed. |
| `sfx/bullet_casing.mp3` | [User casing reference](https://www.youtube.com/shorts/_QOGRV6PA8o), first casing-bounce sequence from 0.195s, trimmed. |
| `sfx/headshot_splat.mp3` | [User head-impact reference](https://www.youtube.com/shorts/NniNu8CTPKg), impact at 10.020–10.160 seconds; 55 Hz high-pass, 1400 Hz low-pass, short fades, padded to 0.48 seconds. |
| `vo/vo_headshot.mp3` | [User HEADSHOT reference](https://www.youtube.com/watch?v=VKgyH9k1CSM), trimmed. |
| `vo/vo_rampage.mp3` | [User RAMPAGE reference](https://www.youtube.com/watch?v=OPxcArhq16A), trimmed. |
| `vo/vo_killstreak.mp3`, `vo/vo_bloodbath.mp3`, `vo/vo_massacre.mp3`, `vo/vo_terminus.mp3` | Qwen3-TTS generated words conditioned on the supplied HEADSHOT/RAMPAGE audio and transcript, then trimmed and peak normalized. |
| `vo/vo_hurt_ouch.mp3`, `vo/vo_hurt_ooh.mp3`, `vo/vo_hurt_ermph.mp3`, `vo/vo_hurt_argh.mp3` | JeremySay using Jeremy Schoemaker's existing voice reference; original short reactions. |

All new files are mono MP3 at 44.1kHz/192kbps. Final decoded lengths are kept in the cue registry.
The spoken Last Engineer intro remains JeremySay audio from the previous revision.

## Historical source inventory

The following tables describe the previous Unreal import and retained older effects. The three
weapon rows are superseded in the browser build by the current MP3 entries above.

## Weapons/

| File | Source file | Source URL | License | Author |
|---|---|---|---|---|
| `pistol_shot.wav` | Walther PPQ `X_39P.wav` (near distance, trimmed to single shot) | https://opengameart.org/content/the-free-firearm-sound-library | CC0 (Public Domain) | Ben Jaszczak, Brian Nelson, Kevin Heras, Matthew Nanney (The Free Firearm Sound Library) |
| `rifle_shot.wav` | AR-15 `D_32P.wav` (near distance, trimmed to single shot) | https://opengameart.org/content/the-free-firearm-sound-library | CC0 (Public Domain) | Ben Jaszczak, Brian Nelson, Kevin Heras, Matthew Nanney |
| `shotgun_blast.wav` | Benelli Nova pump shotgun `O_21P.wav` (near distance, trimmed to single shot) | https://opengameart.org/content/the-free-firearm-sound-library | CC0 (Public Domain) | Ben Jaszczak, Brian Nelson, Kevin Heras, Matthew Nanney |
| `magazine_reload.wav` | "Handgun movement" (mixkit id 1668) | https://mixkit.co/free-sound-effects/gun/ | Mixkit Free License (mixkit.co/license/#sfxFree) — free, no attribution required | Mixkit |
| `empty_chamber_click.wav` | "Handgun click" (mixkit id 1660) | https://mixkit.co/free-sound-effects/gun/ | Mixkit Free License | Mixkit |
| `explosion.wav` | "Explosion hit" (mixkit id 1704) | https://mixkit.co/free-sound-effects/explosion/ | Mixkit Free License | Mixkit |

Direct download archive kept in `Weapons/_source/Prepared_SFX_Library.7z`
(from https://opengameart.org/sites/default/files/Prepared%20SFX%20Library.7z, CC0), plus
`Prepared Master Sheet.csv` describing every gun/take in the library for future re-use.


## Zombies/

| File | Source file | Source URL | License | Author |
|---|---|---|---|---|
| `zombie_growl_1.wav` | "Zombie monster growl" (mixkit id 1973) | https://mixkit.co/free-sound-effects/monster/ | Mixkit Free License | Mixkit |
| `zombie_growl_2.wav` | "Wild creature growl" (mixkit id 1957) | https://mixkit.co/free-sound-effects/monster/ | Mixkit Free License | Mixkit |
| `zombie_growl_3.wav` | "Monster calm growl" (mixkit id 1956) | https://mixkit.co/free-sound-effects/monster/ | Mixkit Free License | Mixkit |
| `zombie_scream.wav` | "Monsters scream" (mixkit id 1958) | https://mixkit.co/free-sound-effects/monster/ | Mixkit Free License | Mixkit |
| `zombie_death_1.wav` | "Monster dying in pain" (mixkit id 1960) | https://mixkit.co/free-sound-effects/monster/ | Mixkit Free License | Mixkit |
| `zombie_death_2.wav` | "Exclamation of pain from a zombie" (mixkit id 2207) | https://mixkit.co/free-sound-effects/hurt/ | Mixkit Free License | Mixkit |
| `zombie_attack_swipe.wav` | "Sword slash swoosh" (mixkit id 1476) — generic melee whoosh, repurposed as a zombie claw-swipe cue, not a zombie-specific recording | https://mixkit.co/free-sound-effects/swoosh/ | Mixkit Free License | Mixkit |

## Ambience/

| File | Source file | Source URL | License | Author |
|---|---|---|---|---|
| `train_arriving.wav` | "Train arrival at station" (mixkit id 1629) | https://mixkit.co/free-sound-effects/train/ | Mixkit Free License | Mixkit |
| `train_doors_open.wav` | "Train door open" (mixkit id 1637) | https://mixkit.co/free-sound-effects/train/ | Mixkit Free License | Mixkit |
| `alarm_siren.wav` | "City alert siren loop" (mixkit id 1008) | https://mixkit.co/free-sound-effects/alarm/ | Mixkit Free License | Mixkit |
| `station_ambience_loop.wav` | "Walking crowd at subway station loop" (mixkit id 358) | https://mixkit.co/free-sound-effects/public-places/ | Mixkit Free License | Mixkit |

**Gap — not sourced:** train brake squeal. Mixkit has no brake/screech category with a real
match (searched `brake`, `screech`, `car`, `truck` — nothing usable). Pixabay returned HTTP 403
(Cloudflare "Just a moment" bot check) to unattended curl. Freesound.org hits require login/API
key. Left out rather than mislabeling something else as a brake squeal.

## License notes

- **CC0 (OpenGameArt "The Free Firearm Sound Library")**: public domain, no rights reserved, no
  attribution required. Verified the file actually downloaded from OGA's own file server
  (`opengameart.org/sites/default/files/...`), not the dead `freefirearmsfx.com`/mediafire
  links mentioned in the page's own comments.
- **Mixkit Free License**: royalty-free, no attribution required, free for personal and
  commercial use; the one restriction is you cannot resell/redistribute the raw sound file
  itself as a standalone stock asset. Confirmed via each asset's real download URL
  (`https://mixkit.co/free-sound-effects/download/<id>/`), which resolves to
  `https://assets.mixkit.co/active_storage/sfx/<id>/<id>.wav` (or `.mp3` for a few IDs) — this
  is the real full-quality file, not a watermarked preview.

The opening narration was regenerated with JeremySay on September 25, 2026.
Script: "One day I woke up... it was dark... and I realized... I was the last engineer."

## September 25 suppressor and pickup voices

Health pickup says "OHHH THAT’S THE STUFF!!!" and armor pickup says "Armor Baby!". Both clips were generated with JeremySay.

The suppressed pistol uses the user-selected reference https://www.youtube.com/shorts/Kh8oU2OGMAE, trimmed from 0.402 to 0.680 seconds with short boundary fades. This recording is excluded from the public source package.

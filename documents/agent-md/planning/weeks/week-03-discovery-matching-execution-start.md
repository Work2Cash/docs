# Work2Cash Week 3 — Discovery, Matching and Active Task Start

> Junior-developer overview. Open your team weekly Markdown for all five days and the agent instructions embedded under each day.

## Week outcome

Build public discovery, Tasker interest, Task Owner selection and the first half of active execution.

## Before the week starts

The same team's Week 2 exit result is accepted or any carry-over is explicitly recorded.

This numbered week is a position inside each team's plan. The approved delivery order still applies: Admin construction, Mobile and Backend construction, Admin Integration, then cross-platform hardening.

## Day 1 of 5 — Monday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W3D1 — Discovery/matching monitor](admin/week-03-discovery-matching-execution-start.md#day-1-of-5) | Add task interest, direct offer, candidates, accept/reject timeline to task detail. | `feat(admin): discovery matching monitor` |
| Backend | [BE-W3D1 — Discovery APIs](backend/week-03-discovery-matching-execution-start.md#day-1-of-5) | Implement Tasker task list, location filter, nearest-first sorting, limited public preview. | `feat(discovery): implement task browsing` |
| Mobile | [MOB-W3D1 — Tasker discovery](mobile/week-03-discovery-matching-execution-start.md#day-1-of-5) | Implement Tasker task list, nearest-first sorting UI, location filter, limited public task preview. | `feat(mobile): tasker discovery` |

## Day 2 of 5 — Tuesday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W3D2 — Active task operations](admin/week-03-discovery-matching-execution-start.md#day-2-of-5) | Add active status timeline: en route, arrived, in progress, tracking/ETA summary. | `feat(admin): active task operations` |
| Backend | [BE-W3D2 — Interest/accept APIs](backend/week-03-discovery-matching-execution-start.md#day-2-of-5) | Implement Tasker interest, arrival confirmation, direct offer accept/decline, eligibility guards. | `feat(matching): implement tasker interest and acceptance` |
| Mobile | [MOB-W3D2 — Tasker interest and arrival confirmation](mobile/week-03-discovery-matching-execution-start.md#day-2-of-5) | Implement Tasker confirm-arrival-by-required-time, interest submit, direct offer accept/decline. | `feat(mobile): tasker interest and arrival confirmation` |

## Day 3 of 5 — Wednesday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W3D3 — Controlled force cancel](admin/week-03-discovery-matching-execution-start.md#day-3-of-5) | Implement force-cancel action with permission, reason, impact preview and audit. | `feat(admin): controlled force cancel` |
| Backend | [BE-W3D3 — Candidate/selection APIs](backend/week-03-discovery-matching-execution-start.md#day-3-of-5) | Implement candidate list with ETA snapshots, Task Owner accept/reject, rejection logging. | `feat(matching): implement candidate selection` |
| Mobile | [MOB-W3D3 — Task Owner candidate selection](mobile/week-03-discovery-matching-execution-start.md#day-3-of-5) | Implement candidates list, ETA/profile summary, accept/reject Tasker, movement-stage rejection copy. | `feat(mobile): task owner candidate selection` |

## Day 4 of 5 — Thursday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W3D4 — Support live chat console](admin/week-03-discovery-matching-execution-start.md#day-4-of-5) | Implement support queue, conversation view and case linking shell. | `feat(admin): support live chat console` |
| Backend | [BE-W3D4 — Task execution state APIs](backend/week-03-discovery-matching-execution-start.md#day-4-of-5) | Implement start journey, arrived, begin, state guards and TaskStatusEvent. | `feat(tasks): implement execution state transitions` |
| Mobile | [MOB-W3D4 — Active task status actions](mobile/week-03-discovery-matching-execution-start.md#day-4-of-5) | Implement active task screen and Tasker buttons: Start Journey, I have arrived, Begin Task. | `feat(mobile): active task status actions` |

## Day 5 of 5 — Friday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W3D5 — Communication audit view](admin/week-03-discovery-matching-execution-start.md#day-5-of-5) | Show chat/voice/masked call metadata and off-platform flags where permitted. | `feat(admin): communication audit view` |
| Backend | [BE-W3D5 — Socket/chat/tracking](backend/week-03-discovery-matching-execution-start.md#day-5-of-5) | Implement Socket.IO auth, task rooms, support rooms shell, tracking events, ETA guard, chat persistence queue. | `feat(socket): implement task chat and tracking` |
| Mobile | [MOB-W3D5 — Chat, tracking, masked call entry](mobile/week-03-discovery-matching-execution-start.md#day-5-of-5) | Implement task chat, voice note metadata flow, live tracking UI, masked call button and proxy number display. | `feat(mobile): chat tracking masked call entry` |

## End-of-week result

A funded task can move from broadcast or direct offer through Tasker interest, Task Owner acceptance and active-task start with chat and tracking foundations.

- Demonstrate the working result and one failure/recovery path.
- Record tests and commit identifiers for completed days.
- Carry unfinished work on the original task; do not duplicate it.

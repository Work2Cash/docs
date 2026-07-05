# Work2Cash Week 3 - Discovery, Matching And Active Task Start

## Purpose

This is the focused AI-agent execution pack for Week 3 of the Work2Cash build plan.

Before using this weekly pack with Codex or any AI agent, download the required Markdown files from the documentation portal UI.

Use this file with:

- **AGENTS.md Usage Guide** from **Team Markdown Downloads**.
- **Shared Execution Rules** from **Team Markdown Downloads**.
- The relevant team brief from **Team Markdown Downloads**.
- The relevant flow catalogue from its portal page using **Download agent Markdown**.
- **Full Project Markdown** from **Team Markdown Downloads** when broad context is required.
- Any specific contract, model, provider or source document needed for the task using **Download agent Markdown** on that document page.

Do not load the full HTML documents for normal implementation work.

## Dates

- Start: Mon 20 Jul 2026
- End: Fri 24 Jul 2026
- Build model: 8 weeks development + 2 weeks testing

## Week Goal

Build public discovery, Tasker interest, Task Owner selection and the first half of active execution.

## Week Exit Condition

A funded task can move from broadcast/direct offer through Tasker interest, Task Owner acceptance and active task start with chat/tracking foundations.

## Non-Negotiable Rules For This Week

- Use `mode`, not `activeMode`.
- Do not introduce Facebook login.
- Do not introduce card-entry-first payment flows.
- Do not create admin task reassignment.
- Direct offers remain REST/FCM driven, not socket-based.
- Durable task/payment/KYC/wallet state must be REST/database-backed.
- Sensitive actions use PIN confirmation; OTP is for PIN recovery/contact verification.
- Keep commits feature by feature or fix by fix.

## Mobile Tasks

| Day | Date | Workstream | Execution Scope | Dependency | Output Rule |
| --- | --- | --- | --- | --- | --- |
| W3D1 | Mon 20 Jul 2026 | Tasker discovery | Implement Tasker task list, nearest-first sorting UI, location filter, limited public task preview. | /tasker/tasks, /tasker/tasks/{taskId}. | Exact address/media hidden before eligibility. |
| W3D2 | Tue 21 Jul 2026 | Tasker interest and arrival confirmation | Implement Tasker confirm-arrival-by-required-time, interest submit, direct offer accept/decline. | /interest, /accept, /decline. | Tasker must be in Nigeria to accept. |
| W3D3 | Wed 22 Jul 2026 | Task Owner candidate selection | Implement candidates list, ETA/profile summary, accept/reject Tasker, movement-stage rejection copy. | /candidates, /accept-tasker, /reject-tasker. | Task Owner decides based on ETA. |
| W3D4 | Thu 23 Jul 2026 | Active task status actions | Implement active task screen and Tasker buttons: Start Journey, I have arrived, Begin Task. | /start-journey, /arrived, /begin. | Persist every state transition through REST. |
| W3D5 | Fri 24 Jul 2026 | Chat, tracking, masked call entry | Implement task chat, voice note metadata flow, live tracking UI, masked call button and proxy number display. | /task socket, /tracking socket, /call-sessions, /voice-notes. | Socket reconnect must refresh REST state. |


## Backend Tasks

| Day | Date | Workstream | Execution Scope | Dependency | Commit / Output Rule |
| --- | --- | --- | --- | --- | --- |
| W3D1 | Mon 20 Jul 2026 | Discovery APIs | Implement Tasker task list, location filter, nearest-first sorting, limited public preview. | Unblocks mobile Tasker discovery. | feat(discovery): implement task browsing |
| W3D2 | Tue 21 Jul 2026 | Interest/accept APIs | Implement Tasker interest, arrival confirmation, direct offer accept/decline, eligibility guards. | Unblocks Tasker commitment. | feat(matching): implement tasker interest and acceptance |
| W3D3 | Wed 22 Jul 2026 | Candidate/selection APIs | Implement candidate list with ETA snapshots, Task Owner accept/reject, rejection logging. | Unblocks Task Owner selection. | feat(matching): implement candidate selection |
| W3D4 | Thu 23 Jul 2026 | Task execution state APIs | Implement start journey, arrived, begin, state guards and TaskStatusEvent. | Unblocks active task screen. | feat(tasks): implement execution state transitions |
| W3D5 | Fri 24 Jul 2026 | Socket/chat/tracking | Implement Socket.IO auth, task rooms, support rooms shell, tracking events, ETA guard, chat persistence queue. | Unblocks active task communication. | feat(socket): implement task chat and tracking |


## Admin Tasks

| Day | Date | Workstream | Execution Scope | Dependency | Output Rule |
| --- | --- | --- | --- | --- | --- |
| W3D1 | Mon 20 Jul 2026 | Discovery/matching monitor | Add task interest, direct offer, candidates, accept/reject timeline to task detail. | /admin/tasks/{taskId}. | Follows mobile matching flows. |
| W3D2 | Tue 21 Jul 2026 | Active task operations | Add active status timeline: en route, arrived, in progress, tracking/ETA summary. | /admin/tasks/{taskId}. | Admin observes; does not reassign. |
| W3D3 | Wed 22 Jul 2026 | Controlled force cancel | Implement force-cancel action with permission, reason, impact preview and audit. | /admin/tasks/{taskId}/force-cancel. | No admin reassignment under any condition. |
| W3D4 | Thu 23 Jul 2026 | Support live chat console | Implement support queue, conversation view and case linking shell. | /support/sessions plus /support socket. | Follows mobile support live chat. |
| W3D5 | Fri 24 Jul 2026 | Communication audit view | Show chat/voice/masked call metadata and off-platform flags where permitted. | /tasks/{taskId}/communications. | Do not expose unnecessary private content. |


## Cross-Team Dependency Rule

Mobile controls implementation order. Backend must publish contracts/stubs before mobile needs them. Admin follows the operational data created by mobile flows and persisted by backend.

## AI Agent Prompt Template

```text
Read these Markdown files downloaded from the documentation portal UI only:
- Shared Execution Rules
- [Team] Team Markdown Brief
- This weekly execution pack
- [Specific source document downloaded from its portal page]

Do not read HTML files unless I explicitly provide a section.

Task ID:
Team:
Week:
Day:
Flow/use case/module:
Implementation scope:
Acceptance criteria:
Tests required:
Do not do:
Commit message:
```

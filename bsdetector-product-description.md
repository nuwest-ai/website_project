# bsdetector — Product Description

## One line
Evidence of security and AI safety, produced on demand.

## Problem
Enterprises run on assumptions about resilience and AI alignment. Incidents expose the gap between belief and reality.

## Solution
bsdetector executes codified test suites that validate two domains:
1. **Security Viability**: Can critical workloads withstand current threats and recover fast with integrity.
2. **Ethical Viability**: Do AI agents refuse harmful instructions, avoid bias, respect context, and remain robust against jailbreaks.

## How it works
- **Test Packs**: Versioned scenarios for identity compromise, data exfiltration, ransomware, backup integrity, lateral movement, and AI jailbreak batteries.
- **Injectors**: Safe, scoped actions that simulate attacker behavior or adversarial prompts.
- **Sensors**: Collect ground truth from systems, backups, logs, and model outputs.
- **Orchestrator**: Runs tests, compares baselines, and produces signed evidence artifacts.
- **Scores**: Security Viability Score (SVS) and Ethical Viability Score (EVS) with drill-down findings.

## Feature Set
- Backup integrity validation: bit-level restore checks, malware-in-backups detection
- Ransomware pathway tests: control bypass, EDR response, MTTD/MTTR tracking
- Identity kill-chain tests: IAM misconfig, stale keys, privilege escalation
- Data exfil simulations: egress controls, DLP, token misuse
- **AI safety**: jailbreak resistance, harmful-action refusal, toxicity guardrails, context-aware responses by age/gender/social status, bias/consistency checks, red-team prompt batteries
- Evidence artifacts: signed reports, replayable traces, diffs across releases
- CI-friendly: run on change, nightly, or pre-release

## Outcomes
- Board-ready proof of resilience
- Reduced recovery time and error rate
- Lower legal and reputational exposure from unsafe AI behavior
- Repeatable validation for audits and DORA/ISO/SOC2 alignments

## Architecture (high level)
```
[Scenarios/Test Packs] -> [Orchestrator] -> [Injectors] -> [Targets/Models]
                                         -> [Sensors]    -> [Evidence Store]
```
Targets include prod-like envs, backup restores, and AI endpoints. Evidence Store retains artifacts for audit.
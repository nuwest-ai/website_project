# Ethical Viability Testing — Overview

## Purpose
Validate that AI agents do not cause harm and align with organizational and legal standards when adversarially prompted.

## Test Families
1. **Jailbreak Resistance**: Multi-step, obfuscated, and role-play attacks that attempt to elicit harmful, illegal, or unethical actions.
2. **Harmful-Action Refusal**: Clear refusals with constructive alternatives and safe redirection.
3. **Context-Awareness**: Responses vary appropriately by user context such as age, power imbalance, or vulnerable status.
4. **Bias & Fairness**: Consistency across demographics with explicit checks for disparate treatment.
5. **Content Safety**: Toxicity, self-harm, hate, and illegal-instruction filters under pressure.
6. **Traceability**: Deterministic logging of prompts, tool calls, policies, and refusal rationales.

## Metrics (EVS)
- **JR**: Jailbreak success rate (lower is better)
- **HR**: Harmful request refusal rate with quality of safe alternatives
- **CA**: Context alignment score across protected attributes
- **BF**: Bias dispersion across matched prompts
- **CS**: Content safety violations per 1k prompts
- **TR**: Trace completeness

## Evidence
Signed run reports with full prompt-response chains, policy versions, and diffs between releases.

## Cadence
Run on every model or policy change, pre-release, and nightly in staging with canary prompts in production where allowed.
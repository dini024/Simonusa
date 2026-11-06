# Simonusa · Lecture Script: Computational Chemistry and DFT

Format: one chapter = one session (90 minutes). Use each chapter page as a live slide (projector) and run the animations while you narrate.

## Plan of 14 sessions
| # | Topic | Learning outcome |
|---|---|---|
| 1 | Introduction, method map, simulation vs experiment | Explain the roles of simulation and choose a method by size and time scale |
| 2 | Schrödinger equation | Interpret ψ, eigenvalues, \|ψ\|² |
| 3 | Hydrogen atom | Relate n, l, m to energy, shape, nodes |
| 4 | Hartree–Fock and SCF | Explain the SCF cycle and the limits of HF |
| 5 | Electron correlation (MP2, CI, CC) | Distinguish post-HF methods and their cost |
| 6 | Basis sets | Choose a basis set for a purpose |
| 7 | Force fields, MD, Monte Carlo | Choose between classical and quantum methods |
| 8 | PES, optimisation, frequencies | Interpret minima, transition states, ZPE |
| D1–D6 | DFT, functionals, ORCA, Gaussian, outputs, TD-DFT | Run and analyse DFT calculations |

## Session 1 · Introduction to Computational Chemistry (90 min)
**Goal:** students can state what simulation is for (explain, predict, guide experiments), choose a class of method, and judge a prediction by comparing it with experiment.

- 0–10 min · **Hook.** "You have 1.6 million candidate molecules and one month. How do you choose?" Two-minute pair discussion.
- 10–25 min · **Section 1.1.** Read the definition, then ask each student to pick one field card (drugs, batteries, H₂, ...) and say what data they would need from a simulation.
- 25–40 min · **Method map (1.2).** Click each method. Ask: "Why is the DFT box narrow and the MD box wide?" Answer: electrons are treated explicitly, so cost rises quickly.
- 40–60 min · **H₂ from first principles (1.3a).** Ask for predictions before showing numbers. Show computed R~e~ and ω vs experiment (frequency error ≈ 25%). Look at long range: the RHF energy lies above two H atoms, the failure of RHF, a bridge to Chapter 5.
- 60–70 min · **Hückel (1.3b).** Move N and watch the gap shrink. "Why does conjugation length shift colour?" Stress that the model captures trends only.
- 70–85 min · **Guidelines for experiments (1.4).** Screening funnel; GCMC isotherm (θ 0.2–0.9 window); Eyring (change ΔG‡ and T); Sabatier; K~d~.
- 85–90 min · Summary and oral quiz.

**Discussion:** When can a simulation mislead? What must be reported so the result can be reproduced?
**Assignment:** summarise one paper (1 page): problem, method, experimental validation.

## Session 2 · Schrödinger equation (90 min)
**Goal:** explain the meaning of ψ, why energy is quantised, and the Born rule.

- 0–15 · Timeline 1900–1933: show that each step answers a failure of classical physics.
- 15–30 · Colour-coded equation: point to kinetic (curvature), potential, eigenvalue.
- 30–50 · **Wave packet.** "Notice it moves and spreads. Why is a free particle not localised?"
- 50–75 · **Box.** Start with n₁=n₂ (static), then mix. Ask: "Why does the density oscillate only for a mixture?" Answer: the relative phase e^{-i(E₂−E₁)t}.
- 75–90 · **Measurements** build up \|ψ\|². Summary.

**Exercise:** compute E₁ for an electron in a 1 nm box (≈ 0.376 eV) and the wavelength of the 1→2 transition.

## Session 3 · Hydrogen atom (90 min)

- 0–20 · Equation and quantum numbers. 20–45 · Spectral-line animation: ask for the Balmer wavelength before it is shown. 45–65 · Radial probability: count nodes n−l−1. 65–85 · Orbital clouds: discuss the sign (phase) as the basis of bonding. 85–90 · Summary.

**Exercise:** compute λ for the 4→2 transition (≈ 486 nm) and explain its colour.

## Session 4 · Hartree–Fock and SCF (90 min)
**Goal:** explain the many-electron problem and run an SCF.

- 0–15 · Molecular Hamiltonian; stress the repulsion term. 15–30 · Slater determinant: swap two rows, the sign flips. 30–45 · Roothaan equations and the meaning of J and K.
- 45–75 · **Real SCF for H₂.** Start from "electron on atom A": narrate "the density flows to the symmetric solution". Make α small: slower convergence. Compare with a symmetric guess.
- 75–90 · Limits of HF and the bridge to correlation/DFT.

**Exercise:** use the iteration table to find the iteration where |ΔE|<10⁻⁶ for α=1 and α=0.5.
**Grading (example):** quiz 20%, paper assignment 20%, ORCA/Gaussian practical 30%, exam 30%.

## Session 5 · Electron correlation (90 min)
**Goal:** explain the correlation energy and choose MP2/CC by cost.

- 0–15 · Hook: "HF gives 99% of the energy. Why is it still not enough?" Answer: the 1% is comparable to bond energies.
- 15–40 · **Correlation hole.** Show uncorrelated vs correlated modes; ask students to explain the histograms.
- 40–65 · Equations for MP2, CI, CC: point to the orbital-energy denominator (MP2) and the exponential of T (CC, size-extensive).
- 65–85 · **Cost scaling.** "If the system is 2× larger, how much more expensive is CCSD(T)?" (2⁷=128). 85–90 · Summary.

**Exercise:** estimate the CCSD(T) time if GGA-DFT takes 1 hour on a system 3× larger.

## Session 6 · Basis sets (90 min)

- 0–15 · LCAO and why Gaussians are used. 15–35 · STO-nG: add n, switch to log scale; discuss cusp and tail. 35–55 · Polarisation and diffuse functions: ask which basis is needed for an anion. 55–75 · **CBS extrapolation:** change B and watch the error. 75–90 · Basis selection table and relative cost.

**Exercise:** choose a basis for (a) optimising an 80-atom organic molecule, (b) an electron affinity, (c) TD-DFT of a dye; justify each.

## Session 7 · Force fields, MD, Monte Carlo (90 min)

- 0–15 · Force-field equation. 15–30 · Lennard-Jones curve: change ε and σ. 30–55 · **Live MD:** raise T from 0.3 to 1.5 and watch melting; discuss total energy. 55–80 · **GCMC:** J=0 matches Langmuir (record points); J>0 shows condensation. 80–90 · Choosing a method.

**Exercise:** for H₂ in a zeolite, list the GCMC inputs (T, P, force field, μ).

## Session 8 · PES, optimisation, frequencies (90 min)

- 0–20 · PES and stationary points. 20–45 · Optimisation on the Morse and barrier surfaces: start exactly at x=0 on the barrier ("zero gradient, but not a minimum"). 45–70 · Frequencies: change k and μ; compute CO. 70–90 · ZPE and free energy; imaginary-frequency criteria.

**Exercise:** compute ν̃ for k=500 N/m and μ=1 amu (≈ 2913 cm⁻¹).

## Course 2 · DFT with ORCA and Gaussian (6 sessions)
**D1 · HK and KS.** 0–20 dimensionality of Ψ vs ρ; 20–45 HK theorems and KS equations: point to v_H and v_xc; 45–75 density SCF animation of H₂: ask "where is Δρ positive?"; 75–90 practical consequences. Exercise: name two differences between KS and HF.
**D2 · Functionals.** 0–20 Jacob's ladder; 20–45 F_x(s): push κ until it violates Lieb–Oxford; 45–65 D3BJ dispersion; 65–85 selection table. Exercise: choose a functional for (a) dye geometry, (b) a charge-transfer excitation, (c) a solid band gap.
**D3 · ORCA.** 0–20 anatomy of an input; 20–50 practical: write an Opt+Freq input for a molecule from the Molecular Builder; 50–75 SLURM script and submission; 75–90 output files and the Results Analyzer. Assignment: optimise a small molecule and report the completion criteria.
**D4 · Gaussian.** Same as D3: route section, chk→fchk→cube; compare formats with ORCA. Assignment: Gaussian input for the same molecule; compare geometries.
**D5 · Outputs and troubleshooting.** 0–30 checklist; 30–55 ΔG and Boltzmann calculators (give 4 conformers); 55–85 broken cases: hand out failed outputs and ask for a diagnosis. Exercise: compute a reaction ΔG from given Gibbs energies.
**D6 · TD-DFT.** 0–25 Casida, f, λ=1239.84/E; 25–60 lines → curve: change σ and the shift; 60–80 charge-transfer pitfalls and functional choice; 80–90 summary of the whole workflow. Final assignment: a short report (geometry, frequencies, HOMO/LUMO, spectrum) using the Results Analyzer.

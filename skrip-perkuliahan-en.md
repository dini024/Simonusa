---
title: "Simonusa · Lecture Script"
subtitle: "Computational Chemistry and DFT: Session 0 (Linux) and 14 sessions (90 minutes each)"
author: "Simulation and Modeling of Nusantara Atoms"
lang: en-US
---

**How to use.** One chapter = one 90-minute session. **Say** blocks are read almost verbatim; **Do** items are actions on the page (projector); **Ask** items come with expected answers; *spare* items fill extra time. Segment times include demos, discussion and exercises, so each session totals about 90 minutes.

**Contents**

0. Session 0 · Linux Basics: Pre-test and Terminal Training
1. Session 1 · Introduction to Computational Chemistry
2. Session 2 · The Schrödinger Equation
3. Session 3 · The Hydrogen Atom and Orbitals
4. Session 4 · Hartree–Fock and the SCF Process
5. Session 5 · Electron Correlation: MP2, CI, Coupled Cluster
6. Session 6 · Basis Sets
7. Session 7 · Force Fields, Molecular Dynamics and Monte Carlo
8. Session 8 · Potential Energy Surfaces, Optimisation and Frequencies
9. Course 2 · Session D1 · Hohenberg–Kohn and Kohn–Sham
10. Course 2 · Session D2 · Functionals, Jacob's Ladder and Dispersion
11. Course 2 · Session D3 · DFT in Practice with ORCA
12. Course 2 · Session D4 · DFT in Practice with Gaussian
13. Course 2 · Session D5 · Reading Outputs, Energy Calculators and Troubleshooting
14. Course 2 · Session D6 · TD-DFT and UV-Vis Spectra

```{=openxml}
<w:p><w:r><w:br w:type="page"/></w:r></w:p>
```

# Session 0 · Linux Basics: Pre-test and Terminal Training

**Duration:** 90 minutes. **Pages:** Pre-test, Terminal. **Learning outcomes:** (1) measure the class's Linux level; (2) practise the commands needed for HPC work; (3) run the full ORCA workflow (input, job, queue, output) in a safe simulation.

| Min | Activity |
|---|---|
| 0–5 | Hook |
| 5–25 | Pre-test (individual) |
| 25–35 | Debrief: common mistakes |
| 35–75 | Terminal missions 1–6 |
| 75–88 | Terminal missions 7–10 and download |
| 88–90 | Summary and assignment |

### 0–5 Hook

> **Say:** "Computational chemistry happens on Linux clusters, and almost nobody clicks. Before the first calculation, let us see how comfortable we are with the command line. This is a diagnostic, not an exam: nothing is graded."

### 5–25 Pre-test

- **Do:** open the Pre-test page; students work alone for 15 minutes. After each answer the page shows the correct answer and a short explanation, so it also teaches.
- **Ask afterwards:** "Who scored below 60%? Who scored above 85%?" Use the groups to pair experienced students with beginners.

### 25–35 Debrief

> **Say:** "The most common mistakes are the difference between one and two arrows, between rm and rmdir, and between find and grep. A single arrow overwrites a file, two arrows append. rm -r cannot be undone. find looks for file names, grep looks inside files."

- **Do:** project the review table of a volunteer and discuss two wrong answers.

### 35–75 Terminal missions 1–6

> **Say:** "This terminal is a simulation: JavaScript in your browser, no real ORCA and nothing sent to BRIN. That is why you can make mistakes freely. Follow the missions on the right."

- **Do:** walk through mission 1 together (pwd, ls), then let students continue alone.
- **Planted lesson:** ask them to run <code>orca water.inp</code> before loading the module. They will see "command not found". **Ask:** "Why?" **Answer:** software on a cluster is provided through modules; load it first.
- **Ask:** "Why do we submit with sbatch instead of running orca directly?" **Answer:** the login node is shared; heavy work goes through the scheduler.

### 75–88 Terminal missions 7–10

> **Say:** "Now read the output the way you will on the real cluster: grep for the energy, grep with minus A to read the orbital table, and grep for cm minus one to see the frequencies. A negative frequency would mean an imaginary mode."

- **Do:** each student finds the HOMO and LUMO energies and states whether there is an imaginary frequency.
- **Do:** run <code>download water.out</code>, then upload the file to the Results Analyzer and compare with what was read in the terminal.
- **Note:** the numbers are generated for practice; stress that the layout is real, the values are not.

### 88–90 Summary and assignment

**Check understanding.** (1) Which command shows your jobs in the queue? *squeue.* (2) How do you read only the energy line of an output? *grep.* (3) Why load a module? *To make the software available.*

**Assignment.** Retake the pre-test and record the improvement. Write the sequence of commands you would use to run one ORCA job on a real cluster.

```{=openxml}
<w:p><w:r><w:br w:type="page"/></w:r></w:p>
```

# Session 1 · Introduction to Computational Chemistry

**Duration:** 90 minutes. **Page:** Course → Chapter 1. **Learning outcomes:** (1) state the three roles of simulation: explain, predict, and guide experiments; (2) choose a class of method from system size and time scale; (3) judge a prediction by comparing it with experiment. **Preparation:** open Chapter 1 on the projector in full-screen; have paper ready for pair discussion.

**How to use this script.** **Say** blocks are read almost verbatim. **Do** items are actions on the page. **Ask** items come with the expected answers. Items marked *spare* are used if time remains; items marked *cut* are skipped if time is short.

| Min | Activity |
|---|---|
| 0–8 | Hook |
| 8–20 | 1.1 Definition and application fields |
| 20–32 | 1.2 Method map |
| 32–52 | 1.3a H₂ from first principles |
| 52–62 | 1.3b Hückel and colour |
| 62–68 | 1.3c Simulated vs experimental spectrum |
| 68–82 | 1.4 Simulation as a guideline for experiments |
| 82–90 | 1.5 Workflow, summary, assignment |

### 0–8 Hook

> **Say:** "Good morning. Before we start, imagine you have 1.6 million candidate molecules for a more efficient OLED screen, and one month. Synthesising and measuring a single molecule can take days to weeks. How do you choose which molecules to make? Discuss with your neighbour for two minutes."

- **Do:** time two minutes; collect three answers and write them on the board.
- **Expected answers:** intuition, literature, random trials. Steer: "All possible, but slow. Today we look at a third way: compute first."

> **Say:** "This lecture answers three questions: what is computational chemistry, what methods exist, and why are the results reliable enough to guide experiments."

### 8–20 Definition and application fields (1.1)

> **Say:** "Computational chemistry turns physical laws, namely quantum mechanics, classical mechanics and statistical mechanics, into algorithms. The output: structure, energy, properties and behaviour of molecules and materials. Remember one thing: simulation does not replace experiment. It does three jobs. First, it explains why something happens. Second, it predicts what has not been measured. Third, it screens what is worth trying."

- **Do:** scroll to the field cards. Ask each student to pick one card and say what data they would need from a simulation.
- **Sample answers:** batteries → voltage and Li-ion diffusion; H₂ storage → adsorption isotherms and binding energy; spectroscopy → assigning IR/UV-Vis bands; catalysis → reaction barriers.

> **Say:** "Notice that almost every field of materials and life science uses simulation data, some for design decisions, some for interpreting spectra. The common reason: some things cannot be measured, are too expensive, or too dangerous."

### 20–32 Method map (1.2)

> **Say:** "No single method fits all. The horizontal axis is the number of atoms, the vertical axis the time scale, both logarithmic. Quantum methods such as DFT treat electrons explicitly, so they are accurate but expensive: tens to hundreds of atoms and up to picoseconds. Classical methods treat atoms as balls and springs, with no electrons, so they reach millions of atoms and microseconds, but cannot break or form bonds. Monte Carlo, including GCMC, has no real time trajectory but is excellent for equilibrium adsorption."

- **Do:** click DFT, xTB, MD, GCMC and coarse-grained in turn; read the description under the canvas.
- **Ask:** "Why is the DFT box narrow while MD is wide?" **Answer:** electrons are explicit, so cost grows quickly with atoms (Chapter 5 shows N³ to N⁷ scaling).
- **Ask:** "Which method for H₂ adsorption in a zeolite?" **Answer:** GCMC for the isotherm, DFT for the binding energy at specific sites.

### 32–52 H₂ from first principles (1.3a)

> **Say:** "Now real evidence. This curve is computed live in your browser: Hartree–Fock with a minimal basis for the hydrogen molecule. Within the Born–Oppenheimer approximation the nuclei are fixed and for each distance R we compute the electronic energy. The result is a potential energy surface. The bottom of the well is the predicted bond length; the curvature at the bottom gives the vibrational frequency."

- **Do:** let the point move (the molecule vibrates). Show the table.
- **Ask before showing the table:** "How close do you think the prediction is to experiment?" Record guesses.
- **Numbers:** predicted R<sub>e</sub> = 0.712 Å vs experiment 0.741 Å (error about −4%); frequency 5482 cm⁻¹ vs 4401 cm⁻¹ (error about +25%).

> **Say:** "The bond length is decent, the frequency is 25% too high. Why? The basis has only two functions and the electrons are treated without correlation. Now look at the right side of the curve. The green line is the energy of two separated H atoms: the correct dissociation limit. Our curve flattens above that line. This is not a bug: it is the known failure of restricted Hartree–Fock at bond breaking, and it is why we study correlated methods in Chapter 5."

- **Do:** point at the energy gap at large R.
- **Core answer:** a simple model captures trends and qualitative values; quantitative quality needs a better method and basis.
- *Spare:* ask how to improve it: larger basis, UHF, CI, DFT.

### 52–62 Hückel and colour (1.3b)

> **Say:** "The second example explains something you can see: colour. Polyene molecules such as β-carotene have alternating double bonds. Their π electrons are handled by the Hückel model, and the orbital energies follow a cosine formula. The longer the conjugated chain, the more closely spaced the levels, and the HOMO–LUMO gap shrinks."

- **Do:** move N from 2 to 24; point at the gap (top left) and the trend plot (right).
- **Ask:** "What happens to the absorption wavelength?" **Answer:** a smaller gap means absorption at longer wavelength; in very long chains it moves into the visible, which is the origin of colour.
- **Caveat:** the model captures the trend only. Ethene, butadiene, hexatriene and octatetraene absorb near 165, 217, 253 and 304 nm (typical values); the gap decreases in the same direction, but Hückel decreases faster.

### 62–68 Simulated vs experimental spectrum (1.3c)

> **Say:** "In the lab you will compare UV-Vis spectra with TD-DFT calculations. The blue curve is a synthetic experiment, the dashed line the simulation. Notice the systematic shift: simulations are often slightly displaced. So compare the pattern and ordering of the bands, not just one peak position. The added value of simulation: every experimental band can be assigned to a specific orbital transition, for example HOMO to LUMO."

- **Do:** turn off the animation, set the shift to 0 and to 40.
- **Note:** this is synthetic data for illustration, not paper data.

### 68–82 Simulation as a guideline for experiments (1.4)

> **Say:** "Now the most useful part: simulation as a guideline. This funnel is from the 2016 OLED study: a search space of 1.6 million molecules, more than 400 thousand screened by TD-DFT, thousands of promising candidates, a few synthesised, and an external quantum efficiency of up to 22 percent. The experiment does not waste time on hundreds of thousands of bad molecules."

- **GCMC isotherm:** "The simulation scans the chemical potential, equivalent to pressure. The steep part, coverage 0.2 to 0.9, is the informative region. Below it is nearly empty, above it saturated. The experiment need only run in this window."
- **Eyring:** leave ΔG‡ = 22 kcal/mol and T = 298 K: k ≈ 4.6×10⁻⁴ s⁻¹, half-life about 0.4 h. Raise the barrier to 28: too slow; raise T. **Ask:** "What temperature makes a 28 kcal/mol reaction finish in hours?" (try T ≈ 380–400 K).
- **Sabatier:** "The best catalyst binds the intermediate with moderate strength. DFT computes adsorption ΔG on many surfaces; only those near the top are synthesised. This is a qualitative schematic."
- **K<sub>d</sub>:** ΔG<sub>bind</sub> = −9 kcal/mol gives K<sub>d</sub> ≈ 250 nM (moderate affinity); every 1.4 kcal/mol changes K<sub>d</sub> about tenfold.

### 82–90 Summary and assignment (1.5)

> **Say:** "The research loop: model, compute, validate, refine. A simulation is only as good as its model: functional, basis, solvent and starting structure. Always validate on systems with known experimental data, report the method in full, and treat predictions as hypotheses."

**Check understanding.** (1) Name three roles of simulation. *Explain, predict, guide experiments.* (2) Why is DFT not used for a million atoms? *Cost grows quickly because electrons are explicit.* (3) Why does RHF fail at H₂ dissociation? *No correlation; a single-determinant wave function cannot describe two neutral atoms.*

**Common misconceptions.** "A simulation is always right." No: it is right within its assumptions. "Simulation makes experiments unnecessary." No: it selects and explains.

**Assignment.** Summarise one paper (1 page): problem, method, experimental validation, limitations.

```{=openxml}
<w:p><w:r><w:br w:type="page"/></w:r></w:p>
```

# Session 2 · The Schrödinger Equation

**Duration:** 90 minutes. **Page:** Chapter 2. **Learning outcomes:** (1) explain why classical physics failed and how quantum mechanics emerged; (2) read each term of the Schrödinger equation; (3) interpret ψ, quantised energy and the Born rule.

| Min | Activity |
|---|---|
| 0–10 | Hook and context |
| 10–25 | 2.1 History |
| 25–40 | 2.2 The equation and its meaning |
| 40–55 | 2.3 Wave packet |
| 55–75 | 2.4 Particle in a box |
| 75–85 | 2.5 Measurement and \|ψ\|² |
| 85–90 | Summary and assignment |

### 0–10 Hook

> **Say:** "The hydrogen atom is stable. According to classical physics an orbiting electron must radiate, lose energy and spiral into the nucleus in about 10⁻¹¹ seconds. Yet atoms exist. Something is wrong with classical physics. Today we see how the Schrödinger equation fixes it."

- **Ask:** "What other phenomena could classical physics not explain at the start of the 20th century?" **Answer:** blackbody radiation, the photoelectric effect, atomic line spectra.

### 10–25 History (2.1)

> **Say:** "In 1900 Planck proposed that radiation energy comes in packets, E equals h times frequency, to explain the blackbody. In 1905 Einstein used the idea for the photoelectric effect: light consists of photons. In 1913 Bohr explained the hydrogen line spectrum with discrete orbits, but the rules were ad hoc. In 1924 de Broglie proposed that matter has a wavelength, lambda equals h over p. In 1925 Heisenberg built matrix mechanics. In 1926 Schrödinger formulated wave mechanics, treating quantisation as an eigenvalue problem, and Born interpreted the square of the wave function as a probability density. In 1933 Schrödinger and Dirac received the Nobel Prize in Physics."

- **Do:** go through the timeline table row by row.
- **Ask:** "Why did this equation become the foundation of chemistry?" **Answer:** once solved it gives the energies and wave functions of atoms and molecules, and all our methods (HF, DFT, CC) are approximate ways of solving it. Dirac (1929): the physical laws are known, the difficulty is that the equations are too complicated to solve exactly.

### 25–40 The equation and its meaning (2.2)

> **Say:** "The equation has three parts. Red: the kinetic energy operator. It measures the curvature of the wave function: the more it oscillates, the higher the energy. Blue: the potential energy, the particle's surroundings. Green: E, the eigenvalue. Only certain values of E give a wave function that can be normalised, and that is the origin of quantisation. The time-dependent version adds i h-bar times the time derivative. For an eigenstate only the phase changes, e to the minus i E t over h-bar."

- **Do:** point at each coloured term in the equation.
- **Ask:** "Why is curvature related to kinetic energy?" **Answer:** large curvature means high momentum, short wavelength.
- **Born rule:** the probability is P(x) = |Ψ|², with the integral of |Ψ|² equal to 1.

### 40–55 Wave packet (2.3)

> **Say:** "A free particle has no potential. We describe it with a wave packet. The real and imaginary parts oscillate: that is the phase. The green line, the squared magnitude, is the probability. Notice two things: the packet moves to the right, and it spreads. The spreading is a direct consequence of the Schrödinger equation."

- **Do:** let the animation run; point at the width at small and large t; pause briefly.
- **Ask:** "Why does a free particle not stay localised?" **Answer:** the packet contains many wavelengths travelling at different speeds.

### 55–75 Particle in a box (2.4)

> **Say:** "Now the particle is confined in a box. The wave function is a sine wave with nodes at the walls, and the energy is n squared pi squared h-bar squared over two m L squared. Only integer n is allowed: quantisation arises from the boundary condition. For an electron in a one-nanometre box, E₁ is about 0.376 eV, and the 1 to 2 transition needs 3 times that, about 1.13 eV, a wavelength of 1100 nm."

- **Do:** start with n₁ = n₂ = 1: the density is static. Then n₁ = 1, n₂ = 2, weight 0.5: the density oscillates.
- **Ask:** "Why does the density oscillate only for a mixture?" **Answer:** the cross term cos((E₂−E₁)t) exists only when two states are mixed.
- **In-class exercise (5 min):** compute E₁ for a 0.5 nm box (answer: 1.50 eV, since E ∝ 1/L²).
- *Spare:* set n₂ to 3 and 4 and compare oscillation frequencies: the n² difference is 8 for (1,3) and 3 for (1,2), so the oscillation is about 2.7 times faster.

### 75–85 Measurement and |ψ|² (2.5)

> **Say:** "Each point here is one position measurement. A single measurement is random, but thousands of measurements build up the pattern of the squared wave function, the red line. This is the Born interpretation: the wave function does not say where the particle is, but how likely it is to be there."

- **Do:** wait until the histogram follows the curve; choose n₁ = 3 and repeat.

### 85–90 Summary and assignment

**Check understanding.** (1) What does energy quantisation mean? *Only certain eigenvalues are allowed by the boundary conditions.* (2) What is |Ψ|²? *The probability density.* (3) Why does a wave packet spread? *Dispersion.*

**Assignment.** Compute E₁ for an electron in a 1 nm box (answer: 0.376 eV) and the wavelength of the 1→2 transition (answer: about 1100 nm). Explain in three sentences why an electron in a narrower box is more "energetic".

```{=openxml}
<w:p><w:r><w:br w:type="page"/></w:r></w:p>
```

# Session 3 · The Hydrogen Atom and Orbitals

**Duration:** 90 minutes. **Page:** Chapter 3. **Learning outcomes:** (1) relate n, l, m to energy, shape and orientation; (2) compute spectral-line wavelengths; (3) read radial probability, nodes and orbital phase.

| Min | Activity |
|---|---|
| 0–10 | Hook |
| 10–30 | 3.1 Equation and quantum numbers |
| 30–55 | 3.2 Energy levels and spectral lines |
| 55–70 | 3.3 Radial probability |
| 70–85 | 3.4 Orbital clouds |
| 85–90 | Summary and assignment |

### 0–10 Hook

> **Say:** "The hydrogen atom is the only atom whose Schrödinger equation can be solved exactly. That makes it the test bed for every theory. Today we use it to answer two things: where do the s, p and d shapes you know from general chemistry come from, and why does hydrogen emit specific colours?"

- **Ask:** "Who has seen a hydrogen lamp or a sodium flame?" Use this to link to the colours of spectral lines.

### 10–30 Equation and quantum numbers (3.1)

> **Say:** "One electron in the Coulomb potential of the nucleus. The solution has a radial part R n l of r and an angular part, the spherical harmonics. Three quantum numbers emerge naturally from the boundary conditions. n, the principal quantum number, sets energy and size: E equals minus 13.606 electron volts over n squared. l, from 0 to n minus 1, sets the shape: s, p, d, f. m, from minus l to plus l, sets the orientation."

- **Do:** write on the board: n=1: 1s; n=2: 2s, 2p (3 orientations); n=3: 3s, 3p, 3d (5 orientations).
- **Ask:** "How many orbitals at n = 3?" **Answer:** 9 (n²).
- **Note:** number of radial nodes = n − l − 1; total nodes = n − 1. In one-electron atoms the energy depends only on n; in many-electron atoms electron repulsion splits l.

### 30–55 Energy levels and spectral lines (3.2)

> **Say:** "The Rydberg formula: one over lambda equals the Rydberg constant times the difference of one over n₁ squared and one over n₂ squared. In nanometres, lambda equals 91.18 divided by that difference. The Balmer series ends at n = 2, and only its lines are visible. Predict the wavelength of the 3 to 2 jump before the animation shows it."

- **Do:** give 1 minute to compute 3→2; then run the animation.
- **Numbers:** 3→2: 656.5 nm (red); 4→2: 486.3 nm (blue-green); 5→2: 434.2 nm (blue); 6→2: 410.3 nm (violet). Lyman 2→1: 121.6 nm (UV); Paschen 4→3: 1876 nm (infrared).
- **Ask:** "Why are the Lyman lines not visible?" **Answer:** the energy is too large; the wavelength is in the ultraviolet.
- **Ask:** "Why is an atomic spectrum made of lines, not a continuum?" **Answer:** electron energies are quantised; only certain differences occur.
- *Spare:* have students compute the 3→2 photon energy in eV (≈ 1.89 eV).

### 55–70 Radial probability (3.3)

> **Say:** "P of r equals r squared times R squared: the probability of finding the electron at distance r, in a thin shell. It starts at zero at the nucleus because the shell volume is zero, then rises to a peak. 1s has one peak. 2s has two peaks with one radial node. 2p has one peak and no radial node. High-energy orbitals reach far."

- **Do:** enable 1s, 2s, 2p; then add 3s, 3p, 3d.
- **Ask:** "How many radial nodes does 3d have?" **Answer:** 3 − 2 − 1 = 0.
- **Ask:** "Why is the 1s peak not at r = 0, even though the density is largest at the nucleus?" **Answer:** the shell probability multiplies density by the shell volume 4πr².

### 70–85 Orbital clouds (3.4)

> **Say:** "Each dot is one position measurement, an x-z plane slice. Red and blue are the sign of the wave function. This is phase, not charge. On the plane between red and blue there is a node. Phase determines how orbitals combine: equal phase forms a bond, opposite phase an antibond, which we see in the molecules chapter."

- **Do:** 1s (one phase), 2s (two spheres of different phase), 2p_z (two lobes), 2p_x (other orientation).
- **Caveat:** a p orbital is not a sharp "figure eight"; it is a spread-out probability density.

### 85–90 Summary and assignment

**Check understanding.** (1) What determines the orbital shape? *l.* (2) Name two hydrogen spectral series and their regions. *Lyman (UV), Balmer (visible), Paschen (IR).* (3) What do red/blue signs mean? *The phase of the wave function.*

**Assignment.** Compute λ for the 4→2 transition (486.3 nm) and explain its colour; compute the n = 5 level energy in eV (−0.544 eV) and the ionisation energy from the ground state (13.606 eV).

```{=openxml}
<w:p><w:r><w:br w:type="page"/></w:r></w:p>
```

# Session 4 · Hartree–Fock and the SCF Process

**Duration:** 90 minutes. **Page:** Chapter 4. **Learning outcomes:** (1) explain why the many-electron problem is hard; (2) read the Hartree–Fock–Roothaan equations; (3) run and interpret an SCF; (4) state the limits of HF.

| Min | Activity |
|---|---|
| 0–10 | Hook |
| 10–25 | 4.1 Molecular Hamiltonian and Born–Oppenheimer |
| 25–40 | 4.2 Slater determinant |
| 40–55 | 4.3 Roothaan equations and the SCF flow |
| 55–80 | 4.4 Real SCF for H₂ |
| 80–90 | 4.5 Limits of HF and assignment |

### 0–10 Hook

> **Say:** "For hydrogen, one electron, the equation can be solved exactly. Add one more electron, helium or H₂, and there is no exact solution any more. Why does one extra electron change everything? The answer lies in one term of the Hamiltonian: electron–electron repulsion."

### 10–25 Hamiltonian and Born–Oppenheimer (4.1)

> **Say:** "Nuclei are thousands of times heavier than electrons, so we treat them as fixed. That is Born–Oppenheimer. The electronic Hamiltonian has three terms: kinetic, nuclear attraction, and electron–electron repulsion, one over the distance between electrons. The green term is the problem: it couples every electron to every other electron, so the equation cannot be separated per electron. Hartree–Fock replaces the instantaneous repulsion with an average repulsion: each electron moves in the average field of the others."

- **Do:** point at the three coloured terms.
- **Ask:** "Why is the average an approximation?" **Answer:** electrons avoid each other instantaneously, not relative to an average.

### 25–40 Slater determinant (4.2)

> **Say:** "The wave function must be antisymmetric: swapping two electrons flips its sign. The Slater determinant satisfies this automatically. Swapping two electrons equals swapping two rows, and the determinant changes sign. If two electrons have the same spin-orbital, two columns are identical and the determinant is zero: that is the Pauli exclusion principle."

- **Do:** on the board write a 2×2 determinant for two electrons; swap rows; show the sign flip.
- **Ask:** "Why can two electrons with the same spin not occupy the same orbital?" **Answer:** the determinant is zero.

### 40–55 Roothaan equations and the SCF flow (4.3)

> **Say:** "The equation: F C equals S C epsilon. The Fock matrix F contains the core terms plus Coulomb repulsion from the electron cloud, minus exchange, the Pauli effect that has no classical analogue. The key: F depends on the density P, P is built from orbitals C, and C comes from F. The equation is circular, so we solve it repeatedly until it is consistent: self-consistent field."

- **Do:** point at the flow diagram: guess P, build F, diagonalise, new P, compute E, converged?
- **Ask:** "What does consistent mean?" **Answer:** the output orbitals produce the same density as the input density.

### 55–80 Real SCF for H₂ (4.4)

> **Say:** "This is a real calculation, not an illustration: H₂ at R = 1.4 bohr, with integrals from Szabo and Ostlund's textbook. Start from the worst possible guess: both electrons on atom A. Watch the right graph: the orbital in the first iteration is lopsided, and with each iteration it flows toward the symmetric shape, a bonding orbital spread over both atoms."

- **Do:** choose "electron localised on atom A", α = 1, press **Ulangi SCF**. Point at the iteration table.
- **Numbers:** energy per iteration: −0.7519, −1.1129, −1.1167, −1.1168, −1.1168; converged (|ΔE| < 10⁻⁶) at iteration 5. Final values: E = −1.1168 Eh, ε<sub>HOMO</sub> = −0.578 Eh, ε<sub>LUMO</sub> = +0.670 Eh, c<sub>A</sub> = c<sub>B</sub> = 0.549.
- **Do again:** α = 0.5. Energies: −0.7519, −0.9192, −1.0137, −1.0640, −1.0900, … converging only at iteration 20.
- **Ask:** "Why is smaller mixing slower but more stable?" **Answer:** the density changes little per iteration; in difficult systems large mixing oscillates or diverges.
- *Spare:* switch to the symmetric guess and compare the number of iterations.

### 80–90 Limits of HF and assignment (4.5)

> **Say:** "HF satisfies Pauli but only feels the average of the other electrons. What is missing is the correlation energy, about one percent of the total energy but comparable to chemical bond energies. As a result HF fails at bond breaking and accurate reaction energies. Chapter 5 repairs this, and in the second course we use DFT, which includes correlation at much lower cost."

**Check understanding.** (1) Why is SCF needed? *The equation is circular.* (2) What is the difference between Coulomb and exchange? *Coulomb: classical repulsion of the cloud; exchange: the Pauli effect.* (3) What do you do if SCF does not converge? *Lower mixing/damping, level shift, DIIS, a better initial guess.*

**Assignment.** From the iteration table, find the iteration where |ΔE| < 10⁻⁶ for α = 1 and α = 0.5 (5 and 20) and explain the difference. **Example grading:** quiz 20%, paper assignment 20%, ORCA/Gaussian practical 30%, exam 30%.

```{=openxml}
<w:p><w:r><w:br w:type="page"/></w:r></w:p>
```

# Session 5 · Electron Correlation: MP2, CI, Coupled Cluster

**Duration:** 90 minutes. **Page:** Chapter 5. **Learning outcomes:** (1) define the correlation energy; (2) distinguish MP2, CI and CC; (3) choose a method by cost and accuracy.

| Min | Activity |
|---|---|
| 0–10 | Hook |
| 10–35 | 5.1–5.2 Correlation energy and the correlation hole |
| 35–60 | 5.3 MP2, CI, CC |
| 60–82 | 5.4 Cost scaling |
| 82–90 | Summary and assignment |

### 0–10 Hook

> **Say:** "Hartree–Fock gives about 99 percent of the total energy. That sounds good, but chemical bond energies are only about one percent of the total energy. The missing one percent decides whether a reaction happens. Today we study what is missing and how to recover it."

- **Ask:** "If a 1% error looks small, why is it fatal for chemistry?" **Answer:** because we compare energy differences between reactants and products, which are as small as that error.

### 10–35 Correlation energy and the correlation hole

> **Say:** "The correlation energy is defined as the exact energy minus the Hartree–Fock energy, always negative. In HF each electron feels the average of the others. But electrons avoid each other instantly: if one is here, the other tends to be on the opposite side. In the animation two electrons move on a ring. The first mode has no correlation: the angular separation is uniform. The second mode is correlated: a separation near zero rarely occurs. That is the Coulomb hole."

- **Do:** choose the uncorrelated mode, wait for a flat histogram (dashed line 1/2π); switch to the correlated mode and wait for it to follow (1−cos Δ)/2π.
- **Ask:** "What is the difference between the two histograms?" **Answer:** in the correlated mode the electrons are rarely close.
- **Note:** this is a conceptual toy model, not a quantum result.

### 35–60 MP2, CI and Coupled Cluster

> **Say:** "Three ways to add correlation. MP2 uses second-order perturbation theory: it sums contributions from double excitations, with orbital-energy differences in the denominator. Cheap, but poor for strongly delocalised systems. CI, configuration interaction, writes the wave function as a combination of excited determinants. With all excitations, FCI, the result is exact for that basis, but possible only for very small molecules, and CISD is not size-extensive. Coupled cluster uses an exponential form, e to the T, which guarantees size-extensivity. CCSD(T) is called the gold standard for small to medium molecules."

- **Do:** point at the energy-difference denominator in the MP2 formula; point at the exponential of T in CC.
- **Ask:** "What does size-extensive mean?" **Answer:** the energy of two far-apart molecules equals the sum of their separate energies.
- **Ask:** "Why does the exponential guarantee that?" **Answer:** because e^(A+B) = e^A e^B for non-interacting parts.

### 60–82 Cost scaling

> **Say:** "More accurate methods are more expensive. If the system size is multiplied by N, the formal cost grows as N to the k. Pure DFT is about N cubed; Hartree–Fock and hybrid DFT N to the fourth; MP2 N to the fifth; CCSD N to the sixth; CCSD(T) N to the seventh. The marker on the graph moves from small to large systems; watch the CCSD(T) cost explode."

- **Do:** let the animation run; read the cost text below the graph.
- **Ask:** "If the system is 2 times larger, how many times more expensive is CCSD(T)?" **Answer:** 2⁷ = 128. GGA DFT: 8 times. MP2: 32. CCSD: 64.
- **Exercise:** "GGA DFT takes 1 hour. How long does CCSD(T) take on a system 3 times larger?" Rough answer: neglecting the initial constants, 3⁷/3³ = 81 times longer than DFT at the same size.
- *Spare:* discuss a strategy: DFT for geometry, single-point CCSD(T) with a TZ basis for the energy.

### 82–90 Summary and assignment

**Check understanding.** (1) Define the correlation energy. *E exact − E HF.* (2) Which methods are size-extensive? *MP2 and CC (CISD is not).* (3) Why not always use CCSD(T)? *N⁷ cost.*

**Assignment.** Design a strategy to compute the reaction energy of a 30-atom organic molecule: geometry, frequencies, final energy; state method, basis and reasons.

```{=openxml}
<w:p><w:r><w:br w:type="page"/></w:r></w:p>
```

# Session 6 · Basis Sets

**Duration:** 90 minutes. **Page:** Chapter 6. **Learning outcomes:** (1) explain LCAO and why Gaussians are used; (2) choose a basis (polarisation, diffuse); (3) understand extrapolation to the complete basis limit and the price of basis sets.

| Min | Activity |
|---|---|
| 0–10 | Hook |
| 10–30 | 6.1 LCAO and STO-nG |
| 30–50 | 6.2 Polarisation and diffuse functions |
| 50–70 | 6.3 Convergence and CBS |
| 70–85 | 6.4 Choosing a basis and its price |
| 85–90 | Summary and assignment |

### 0–10 Hook

> **Say:** "A wave function is a continuous function. A computer only stores numbers. A basis set is how we store an orbital with a finite number of numbers. The choice of basis matters as much as the choice of method. A researcher who picks the wrong basis can obtain results that look reasonable but are wrong."

### 10–30 LCAO and STO-nG (6.1)

> **Say:** "We write molecular orbitals as linear combinations of basis functions: LCAO. Real atomic orbitals have Slater form, e to the minus zeta r, with a sharp cusp at the nucleus and an exponential tail. Gaussians, e to the minus alpha r squared, have no cusp and their tail falls too fast. But Gaussian integrals can be computed analytically, so computers use them. The trick: several Gaussians are contracted to mimic one Slater. STO-3G uses three."

- **Do:** move n from 1 to 3; watch the fit near the nucleus. Turn on the log scale and look at the tail.
- **Ask:** "Where do Gaussians fail most at mimicking the Slater?" **Answer:** at r = 0 (the cusp) and in the far tail.

### 30–50 Polarisation and diffuse functions (6.2)

> **Say:** "Polarisation: add functions of higher angular character, d on carbon, p on hydrogen. This lets the electron cloud change shape inside a bond. On the graph the pure s density is symmetric; add a little p_z and the cloud shifts. Diffuse functions, the prefix aug or a plus sign, have small exponents so the cloud reaches far. They are essential for anions, Rydberg states and weak interactions."

- **Do:** move λ; point at the density shift. On the diffuse graph, point at the distant peak.
- **Ask:** "Which basis for an electron affinity?" **Answer:** one with diffuse functions (aug-cc-pVTZ, def2 with ma-/+).

### 50–70 Convergence and CBS (6.3)

> **Say:** "The correlation energy decreases with basis quality following X to the minus 3, with X = 2 for double-zeta, 3 for triple-zeta and so on. Because the pattern is known, we can extrapolate to the complete basis limit from two bases, say triple and quadruple zeta, using the formula on screen."

- **Do:** keep B small (0.1); note the extrapolation error. Raise B to 0.4; the error grows.
- **Ask:** "Why is the extrapolation not perfect?" **Answer:** higher-order terms (X⁻⁵) are not modelled.
- **Caveat:** this graph is a model of the functional form; the numbers are illustrative.

### 70–85 Choosing a basis and its price (6.4)

> **Say:** "This table shows the number of basis functions for water and the relative HF cost, proportional to N to the fourth, with cc-pVDZ equal to 1. STO-3G: 7 functions, cost 0.007. cc-pVTZ: 58 functions, cost 34 times. aug-cc-pVTZ: 92, cost 216 times. cc-pVQZ: 115, cost 527 times. One step to a larger basis can make a calculation tens to hundreds of times longer."

- **Rules of thumb:** initial optimisation: def2-SVP or 6-31G(d); final energy and properties: def2-TZVP or cc-pVTZ; anions and excitations: add diffuse functions; heavy atoms: pseudopotentials (def2 handles them).
- **Oral exercise:** (a) optimising an 80-atom organic molecule, (b) an electron affinity, (c) TD-DFT of a dye. Answers: (a) def2-SVP + D3BJ, (b) aug-cc-pVTZ or ma-def2-TZVP, (c) def2-TZVP or 6-311+G(d,p) with CAM-B3LYP.

### 85–90 Summary and assignment

**Check understanding.** (1) Why are Gaussians used despite being less accurate? *Analytic integrals.* (2) What are diffuse functions for? *Long tails: anions, excitations, weak interactions.* (3) By what factor does HF cost increase from cc-pVDZ to cc-pVTZ for water? *About 34.*

**Assignment.** Choose a basis for the three cases on the slide and give a one-sentence reason for each.

```{=openxml}
<w:p><w:r><w:br w:type="page"/></w:r></w:p>
```

# Session 7 · Force Fields, Molecular Dynamics and Monte Carlo

**Duration:** 90 minutes. **Page:** Chapter 7. **Learning outcomes:** (1) write the components of a force field; (2) explain MD and Monte Carlo; (3) choose between classical and quantum methods.

| Min | Activity |
|---|---|
| 0–10 | Hook |
| 10–25 | 7.1 Force fields and the Lennard-Jones curve |
| 25–55 | 7.2 Live MD |
| 55–82 | 7.3 GCMC on a lattice |
| 82–90 | 7.4 Choosing a method, assignment |

### 0–10 Hook

> **Say:** "If we want to watch a protein fold or water freeze, we need thousands of atoms for nanoseconds. Quantum methods cannot manage. The solution: remove the electrons and draw atoms as balls connected by springs. Today we see what we gain and what we lose."

### 10–25 Force field (7.1)

> **Say:** "Energy is a sum of bond springs, angle springs, torsions and non-bonded interactions, van der Waals and Coulomb. The van der Waals interaction is modelled by Lennard-Jones: four epsilon times sigma over r to the twelfth minus sigma over r to the sixth. The twelfth-power term is Pauli repulsion, the sixth-power term is dispersion. The well depth is epsilon, the zero-crossing distance sigma."

- **Do:** move ε and σ; point at the minimum (≈ 1.12 σ).
- **Ask:** "What can a standard force field not do?" **Answer:** break or form bonds, charge transfer, electronically excited states.

### 25–55 Live molecular dynamics (7.2)

> **Say:** "Here are 49 Lennard-Jones particles in two dimensions. We solve Newton's laws step by step with the velocity Verlet algorithm. Set the target temperature with the slider. At low temperature the particles form an ordered lattice, a solid. Raise the temperature and the lattice melts. The right graph shows kinetic, potential and total energy. Without a thermostat the total energy is nearly constant."

- **Do:** start at T = 0.3 (solid); raise slowly to 1.5; press Reset and repeat with T = 0 (no thermostat) and point at the flat total energy.
- **Ask:** "Why is the total energy nearly constant without a thermostat?" **Answer:** the system is isolated, energy conservation (small error from the time step and cutoff).
- **Ask:** "What is a thermostat for?" **Answer:** to mimic contact with surroundings at a set temperature.
- *Spare:* discuss the time step: too large and the energy drifts.

### 55–82 GCMC on a lattice (7.3)

> **Say:** "Grand canonical Monte Carlo suits adsorption, for example H₂ in zeolites or biochar. Molecules are inserted or removed at random with the Metropolis rule: the probability of accepting an insertion is the minimum of one or e to the minus the energy change minus the chemical potential over kT. A 30 by 30 lattice. Epsilon is the binding energy, J the neighbour interaction. If J is zero the result must follow the Langmuir isotherm. Watch the dashed line."

- **Do:** J = 0, ε = 0.5, kT = 1. Choose μ = −3, −1, 0, 1; each time wait a few seconds and press **Catat titik isoterm**. The points should fall on the Langmuir curve (for example μ = −1: θ ≈ 0.38).
- **Do again:** clear the points; J = 1.2, kT = 0.7; sweep μ from −4 to −1: a sharp jump (condensation).
- **Ask:** "Why does a jump appear when J is large?" **Answer:** attraction between molecules makes adsorption cooperative: a phase transition.
- **Link to research:** the lattice is only a model; RASPA uses real force fields and zeolite coordinates.

### 82–90 Choosing a method and assignment (7.4)

**Check understanding.** (1) Difference between MD and MC? *MD has a time trajectory; MC only samples.* (2) Name the two Lennard-Jones terms. *r⁻¹² repulsion and r⁻⁶ attraction.* (3) Method for a reaction at an enzyme active site? *QM/MM.*

**Assignment.** For H₂ in a zeolite, list the required GCMC inputs: temperature, pressure (fugacity), framework and charges, force field, number of cycles, cutoff.

```{=openxml}
<w:p><w:r><w:br w:type="page"/></w:r></w:p>
```

# Session 8 · Potential Energy Surfaces, Optimisation and Frequencies

**Duration:** 90 minutes. **Page:** Chapter 8. **Learning outcomes:** (1) distinguish minima and saddle points; (2) understand optimisation; (3) compute frequencies and ZPE and interpret imaginary frequencies.

| Min | Activity |
|---|---|
| 0–10 | Hook |
| 10–35 | 8.1 PES and stationary points |
| 35–60 | Optimisation: Morse and barrier demo |
| 60–80 | 8.2 Harmonic frequencies |
| 80–90 | 8.3 Thermochemistry, assignment |

### 0–10 Hook

> **Say:** "After running a geometry optimisation the program says 'converged'. Does that mean you have a stable structure? Not necessarily. Today we see why we always run frequencies after an optimisation."

### 10–35 PES and stationary points (8.1)

> **Say:** "With Born–Oppenheimer, the electronic energy is a function of nuclear positions: the potential energy surface. Stationary points are points with zero gradient. If all curvatures are positive it is a minimum: reactant, product or intermediate. If one curvature is negative it is a first-order saddle point: a transition state. In chemistry a minimum is what you can photograph; a transition state is the top of the barrier that sets the rate."

- **Do:** choose Morse; move x; point at the gradient and k.
- **Ask:** "What is the curvature difference between a minimum and a saddle point?" **Answer:** a minimum has k > 0; a saddle point has k < 0.

### 35–60 Optimisation (demo)

> **Say:** "Optimisation moves downhill along the gradient until the force is almost zero. On the Morse surface, from anywhere, it goes down to the minimum. Now we switch to the barrier surface and start exactly at x = 0. The gradient there is zero."

- **Do:** Morse → press **Optimasi**: it converges to the minimum. Switch to Penghalang; move x to 0; press **Optimasi**: nothing moves. The text says: gradient ≈ 0 but k < 0, a saddle point.
- **Ask:** "Does 'converged' mean minimum?" **Answer:** no; only zero gradient. A frequency calculation is needed.
- **Do:** move x to 0.35 and optimise: it falls into one of the two minima (±1).
- *Spare:* discuss how to find a TS (OptTS, calcfc, IRC).

### 60–80 Harmonic frequencies (8.2)

> **Say:** "Vibrational frequency comes from curvature: nu tilde equals one over two pi c times the square root of k over mu. In practical units, 130.28 times the square root of k in newtons per metre over mu in amu. For CO, k is about 1850 newtons per metre and mu is 6.86 amu, so about 2139 per centimetre. Experiment gives 2143 per centimetre for the fundamental. The zero-point energy, half h c nu tilde, is about 3.06 kilocalories per mole."

- **Do:** set k = 1850, μ = 6.86 with the sliders; read the frequency and ZPE; change μ to 0.5 (H₂-like): the frequency rises.
- **Ask:** "A stiffer bond or lighter atoms: what happens to frequency?" **Answer:** higher.
- **Exercise:** k = 500 N/m, μ = 1 amu: ν̃ ≈ 2913 cm⁻¹.

### 80–90 Thermochemistry and assignment (8.3)

> **Say:** "The practical rule: zero imaginary frequencies means a minimum; one means a transition state; two or more means the structure is not a significant point and must be re-optimised. The free energy G equals the electronic energy plus ZPE and thermal correction minus T times entropy. DFT frequencies are usually multiplied by a scale factor, about 0.96 to 0.98 for B3LYP, and the factor must be reported."

**Check understanding.** (1) Why frequencies after optimisation? *To distinguish minima from saddle points.* (2) What does one imaginary frequency mean? *A transition state.* (3) Why are frequencies valid only at an optimised geometry at the same level of theory? *Curvature is only meaningful at a stationary point.*

**Assignment.** Compute the ZPE of O–H (k = 780 N/m, μ = 0.948 amu) and compare with C–O. *Hint:* ν̃ = 130.28√(k/μ). *Answer:* ν̃ ≈ 3737 cm⁻¹, ZPE ≈ 5.3 kcal/mol (O–H is higher than C–O because μ is much smaller).

```{=openxml}
<w:p><w:r><w:br w:type="page"/></w:r></w:p>
```

# Course 2 · Session D1 · Hohenberg–Kohn and Kohn–Sham

**Duration:** 90 minutes. **Page:** Course 2 → D1. **Learning outcomes:** (1) state the Hohenberg–Kohn theorems; (2) read the Kohn–Sham equations; (3) explain why a density SCF is the same kind of loop as in Hartree–Fock.

| Min | Activity |
|---|---|
| 0–12 | Hook: from 3N to 3 dimensions |
| 12–35 | D1.1 HK theorems |
| 35–58 | D1.2 KS equations |
| 58–80 | D1.3 Density SCF of H₂ |
| 80–90 | D1.4 Consequences, assignment |

### 0–12 Hook

> **Say:** "Remember the exponential wall in Chapters 2 and 4: the wave function of N electrons has 3N dimensions. The electron density, however large N is, has only three dimensions. The question that changed computational chemistry in 1964: can we compute the energy from the density alone, without the wave function?"

- **Ask:** "If the density is enough, what information are we throwing away?" **Answer:** the detailed wave function; we only keep the probability of finding an electron at each point.

### 12–35 The Hohenberg–Kohn theorems (D1.1)

> **Say:** "The first theorem: the ground-state density uniquely determines the external potential up to a constant. Since the potential determines the Hamiltonian, the density determines every property of the system: the energy is a functional of the density. The second theorem: the energy functional is variational: for a valid trial density the energy is never below the ground-state energy. So we can find the density by minimising the energy."

- **Ask:** "What is the limitation of this theorem?" **Answer:** it only guarantees that the functional exists; its exact form is unknown.
- **Note:** stress that the quality of DFT is entirely determined by the approximation to the functional.

### 35–58 The Kohn–Sham equations (D1.2)

> **Say:** "Kohn and Sham proposed a trick: use a fictitious system of non-interacting electrons with the same density. The energy is split: kinetic energy of the fictitious system, nuclear attraction, Hartree, the classical Coulomb repulsion, and E xc. All the quantum complexity, namely exchange, correlation and the kinetic correction, is packed into E xc. The one-electron equations look like Hartree–Fock: the effective potential contains the nuclear attraction, the Hartree potential and the xc potential, the functional derivative of E xc with respect to the density."

- **Do:** point at the coloured terms in the equation.
- **Ask:** "What is the difference between KS and HF?" **Answer:** HF uses exact exchange and no correlation; KS uses an approximate E xc containing both exchange and correlation. Hybrid functionals mix in some HF exchange.
- **Ask:** "Why must it be an SCF?" **Answer:** the potential depends on the density, the density comes from the orbitals, the orbitals from the potential.

### 58–80 Density SCF of H₂ (D1.3)

> **Say:** "This animation uses the real H₂ SCF from Chapter 4, viewed as the density along the bond axis. The grey line is the sum of two free H atoms. The blue line is the molecular density at the current iteration. The lower curve is the difference: positive means electrons gained. Notice: in early iterations the density is lopsided, then symmetric, and electrons pile up between the two nuclei: that is the covalent bond."

- **Do:** let the animation loop; pause at the last iteration; point at the positive region between the nuclei and the negative region near the nuclei.
- **Ask:** "Why does the build-up between the nuclei stabilise the molecule?" **Answer:** electrons between the nuclei attract both nuclei and screen the nucleus–nucleus repulsion.
- *Spare:* ask students what happens at larger R (the build-up vanishes).

### 80–90 Consequences and assignment (D1.4)

> **Say:** "Kohn–Sham orbitals are not physical orbitals, but their shapes are very similar to HF orbitals and they are routinely used for HOMO and LUMO analysis. Pure DFT cost scales about N cubed, lower than HF, which makes hundreds of atoms feasible. And the ground-state density alone does not give excitations: for spectra we use TD-DFT in D6."

**Check understanding.** (1) State the two HK theorems. (2) What does E xc contain? (3) Why is DFT cheaper than HF? *The density is 3-dimensional; local/semilocal functionals have no exact-exchange integrals.*

**Assignment.** Name two differences between KS and HF and one similarity.

```{=openxml}
<w:p><w:r><w:br w:type="page"/></w:r></w:p>
```

# Course 2 · Session D2 · Functionals, Jacob's Ladder and Dispersion

**Duration:** 90 minutes. **Page:** D2. **Learning outcomes:** (1) name the rungs of Jacob's ladder with examples; (2) explain GGA through the exchange enhancement factor; (3) understand the need for dispersion corrections; (4) choose a functional for a given purpose.

| Min | Activity |
|---|---|
| 0–10 | Hook |
| 10–28 | D2.1 Jacob's ladder |
| 28–50 | D2.2 Enhancement factor F_x |
| 50–68 | D2.3 Dispersion |
| 68–85 | D2.4 Choosing a functional |
| 85–90 | Summary and assignment |

### 0–10 Hook

> **Say:** "There are hundreds of functionals. Students often pick B3LYP 'because everyone uses it'. Today we see what really differs between functionals and how to choose with reasons."

### 10–28 Jacob's ladder (D2.1)

> **Say:** "John Perdew arranged functionals like a ladder to the heaven of accuracy. The first rung is LDA, depending only on the density. The second is GGA, adding the density gradient: PBE, BP86. The third is meta-GGA, adding the kinetic energy density. The fourth is hybrids, mixing in Hartree–Fock exchange: B3LYP, PBE0, M06-2X. There are range-separated hybrids such as CAM-B3LYP and ωB97X-D, suited to charge transfer. The fifth is double hybrids with MP2 correlation. Climbing the ladder is generally more accurate but more expensive."

- **Ask:** "Why do hybrids take longer than GGAs?" **Answer:** exact-exchange integrals (RIJCOSX helps).

### 28–50 The exchange enhancement factor (D2.2)

> **Say:** "LDA only sees the density value, so its enhancement factor equals one. GGA also sees the gradient through s. In PBE, F x equals one plus kappa minus kappa over one plus mu s squared over kappa. With kappa 0.804, the maximum F x is 1.804, exactly the Lieb–Oxford bound. Move the mu and kappa sliders: if kappa goes beyond 0.804 the curve violates the physical bound."

- **Do:** start from PBE; raise κ to 0.9; point at the text "melanggar batas Lieb–Oxford" (violates the bound). Lower μ to 0.1235 (PBEsol): the curve is flatter.
- **Ask:** "Why does PBEsol use a smaller μ?" **Answer:** it is set to be correct for solids (the small-gradient expansion).

### 50–68 Dispersion (D2.3)

> **Say:** "London dispersion forces come from long-range correlation that local functionals do not capture. The D3 correction adds a term minus C6 over R to the sixth with Becke–Johnson damping so it does not diverge at short range. On the graph the grey undamped line plunges toward minus infinity, while the red damped line stays finite. The animation sweeps the a1 parameter, that is, how early the damping acts."

- **Do:** let the animation run; turn it off; set a₁ to 0.1 and 0.8, and watch the depth.
- **Ask:** "Which functionals do not need an extra D3?" **Answer:** those already containing dispersion (ωB97X-D) or parametrised for it (M06-2X) usually take no additional D3.
- **Note:** the graph uses Ar···Ar-like values, not official D3 parameters; in ORCA use the keyword D3BJ, in Gaussian EmpiricalDispersion=GD3BJ.

### 68–85 Choosing a functional (D2.4)

> **Say:** "A starting point, not a rule: organic geometries B3LYP-D3BJ or PBE0-D3BJ with def2-SVP to TZVP; thermochemistry and barriers M06-2X, ωB97X-D3 or double hybrids; π to π-star excitations B3LYP or PBE0, but charge-transfer and Rydberg states need CAM-B3LYP or ωB97X-D; solids PBE or PBEsol, and HSE06 for band gaps; transition metals require testing several functionals."

- **Oral exercise:** (a) geometry of an organic dye, (b) charge-transfer excitation, (c) band gap of a solid. *Answers:* (a) B3LYP-D3BJ/def2-SVP, (b) CAM-B3LYP/def2-TZVP, (c) HSE06.
- **Warning:** pure functionals underestimate gaps and barriers because of delocalisation error; always validate against experiment or high-level references and report the functional, basis, dispersion and solvent.

**Check understanding.** (1) What is a GGA? *It depends on ρ and ∇ρ.* (2) Why is D3 needed? *Local functionals do not capture dispersion.* (3) Which functional type for charge transfer? *Range-separated.*

**Assignment.** Write a three-row table of functional choices for your own research, with reasons.

```{=openxml}
<w:p><w:r><w:br w:type="page"/></w:r></w:p>
```

# Course 2 · Session D3 · DFT in Practice with ORCA

**Duration:** 90 minutes. **Page:** D3, Input Builder, Molecular Builder. **Learning outcomes:** (1) read and write an ORCA input; (2) prepare and submit a SLURM job; (3) recognise the output files and success criteria.

| Min | Activity |
|---|---|
| 0–10 | Hook |
| 10–30 | D3.1 Anatomy of an input |
| 30–60 | Practical: from molecule to input |
| 60–75 | D3.2 SLURM script and running |
| 75–90 | D3.3 Output files and assignment |

### 0–10 Hook

> **Say:** "So far we studied theory. Today we run calculations. An ORCA input is only a few lines, but every line is a scientific decision: functional, basis, dispersion, solvent, charge, multiplicity."

### 10–30 Anatomy of an input (D3.1)

> **Say:** "The first line starts with an exclamation mark: the keywords. For example B3LYP D3BJ def2-SVP Opt Freq CPCM water. Next come blocks that start with a percent sign: percent pal for the number of cores, percent maxcore for memory per core in megabytes. The coordinates start with star xyz, followed by charge and multiplicity, and end with a star."

- **Do:** open D3; point at each part in the code box.
- **Ask:** "What is the total memory if nprocs is 8 and maxcore 2000?" **Answer:** 16 000 MB (16 GB), and it must be below the node memory.
- **Ask:** "Why must parallel ORCA be called with the full path?" **Answer:** ORCA launches its own MPI processes.

### 30–60 Practical: from molecule to input

- **Do (demo, 30 min):** (1) Molecular Builder: type a SMILES, for example ethanol (CCO), Build, Generate 3D. (2) Input Builder: choose ORCA, the preset "Opt+Freq organik", inspect the generated keywords. (3) Switch to TD-DFT with CAM-B3LYP and SMD: watch the keywords change. (4) Add the constraint "freeze bond 1 2" and look at the %geom block.
- **Ask:** "Why does a multiplicity warning appear if I change it to 2?" **Answer:** the number of electrons does not match the multiplicity; Input Builder counts the electrons.
- **Class task:** each group builds an input for its chosen molecule and downloads it.

### 60–75 SLURM script and running (D3.2)

> **Say:** "On a cluster we do not run directly; we submit to SLURM. The script holds the resources: number of nodes, cores, time; loads the ORCA module; moves to the submission directory; then calls ORCA with its full path, redirecting output to an out file. The module name depends on your cluster, so ask the administrator."

- **Do:** in Input Builder, the SLURM script tab; fill in the partition and time; download. Point at `$(which orca)`.
- **Ask:** "What happens if the time limit is too short?" **Answer:** the job is killed midway; use a restart.

### 75–90 Output files and assignment (D3.3)

> **Say:** "The main output is the out file. Success: the sentence ORCA TERMINATED NORMALLY at the end, and for an optimisation THE OPTIMIZATION HAS CONVERGED. The xyz file holds the final geometry for the next calculation. gbw stores the binary orbitals; convert to molden with orca_2mkl name -molden, or make a cube with orca_plot name.gbw -i. Upload the out file to the Results Analyzer."

**Check understanding.** (1) Two success criteria of an optimisation. (2) The command for molden. (3) Why run Freq at the same level as Opt?

**Assignment.** Optimise a small molecule and report: final geometry, number of imaginary frequencies, total energy, and completion criteria.

```{=openxml}
<w:p><w:r><w:br w:type="page"/></w:r></w:p>
```

# Course 2 · Session D4 · DFT in Practice with Gaussian

**Duration:** 90 minutes. **Page:** D4. **Learning outcomes:** (1) read a Gaussian input; (2) convert chk to fchk and cube; (3) compare ORCA and Gaussian.

| Min | Activity |
|---|---|
| 0–10 | Hook |
| 10–30 | D4.1 Anatomy of an input |
| 30–55 | Practical in Input Builder |
| 55–75 | D4.2 TD-DFT and orbital conversion |
| 75–90 | D4.3 Comparison and assignment |

### 0–10 Hook

> **Say:** "Gaussian and ORCA answer the same questions with different syntax. In journals the results are equivalent. The skill you need: read both formats and know the equivalents."

### 10–30 Anatomy of an input (D4.1)

> **Say:** "Gaussian reads a file whose sections are separated by blank lines. The Link 0 section at the top: percent nprocshared, percent mem, percent chk. Then the route section starting with hash p: method slash basis, job keywords such as opt, freq, td. A blank line, the title, a blank line, charge and multiplicity, the coordinates, and a final blank line that is mandatory."

- **Do:** point at the sections; point at the example `#p B3LYP/6-31G(d) opt freq EmpiricalDispersion=GD3BJ scrf=(smd,solvent=water)`.
- **Ask:** "What happens if the final blank line is missing?" **Answer:** Gaussian often fails to read or hangs.

### 30–55 Practical in Input Builder

- **Do (demo):** choose Gaussian; the preset "TD-DFT dye"; point at td(nstates=20,singlets,root=1) and the SMD scrf. Add a heavy atom (for example Ru) and select LANL2DZ: point at the genecp block.
- **Ask:** "Why do heavy atoms need an ECP?" **Answer:** core electrons are replaced by an effective potential; this reduces cost and includes relativistic effects.
- **Class task:** build the Gaussian input for the same molecule as before and compare it with the ORCA input.

### 55–75 TD-DFT and orbital conversion (D4.2)

> **Say:** "For 3D orbitals we convert the chk file to a formatted checkpoint with formchk, then make HOMO and LUMO cubes with cubegen. Success: Normal termination of Gaussian at the end of the log; for an optimisation: Optimization completed and Stationary point found. A negative frequency in the Frequencies block means an imaginary mode."

- **Do:** write three commands on the board: `formchk dye.chk dye.fchk`, `cubegen 0 MO=Homo dye.fchk homo.cube 0 h`, `cubegen 0 MO=Lumo dye.fchk lumo.cube 0 h`.
- **Ask:** "Which files are uploaded to the Results Analyzer?" **Answer:** the log, plus two cubes (HOMO and LUMO).

### 75–90 Comparison and assignment (D4.3)

> **Say:** "Practical differences: ORCA uses inp files, keywords with an exclamation mark and percent blocks; Gaussian uses com files and a route with a hash. ORCA stores orbitals in gbw, converted with orca_2mkl; Gaussian in chk with formchk. ORCA is free for academics with registration; Gaussian is commercial."

**Check understanding.** (1) The Gaussian equivalent of D3BJ. *EmpiricalDispersion=GD3BJ.* (2) The command for a cube. *cubegen.* (3) The equivalent of %pal. *%nprocshared.*

**Assignment.** Compare the ORCA and Gaussian results for the same molecule (bond lengths, relative energy) and comment on the differences.

```{=openxml}
<w:p><w:r><w:br w:type="page"/></w:r></w:p>
```

# Course 2 · Session D5 · Reading Outputs, Energy Calculators and Troubleshooting

**Duration:** 90 minutes. **Page:** D5, Results Analyzer. **Learning outcomes:** (1) check the health of a calculation; (2) compute reaction energies and Boltzmann weights; (3) diagnose common problems.

| Min | Activity |
|---|---|
| 0–10 | Hook |
| 10–30 | D5.1 Checklist |
| 30–55 | D5.2 ΔG calculator |
| 55–65 | D5.3 Boltzmann weights |
| 65–85 | D5.4 Troubleshooting |
| 85–90 | Assignment |

### 0–10 Hook

> **Say:** "A calculation that finishes without an error is not necessarily correct. Today we learn to be sceptical systematically: what to check before you trust a single number."

### 10–30 Checklist (D5.1)

> **Say:** "Six things: first, normal termination. Second, SCF converged. Third, the optimisation converged. Fourth, frequencies with no imaginary mode. Fifth, for open-shell systems, spin contamination: the value of S squared is close to S times S plus one. Sixth, for TD-DFT, the excitation block is complete."

- **Do:** point at the table; open the Results Analyzer; upload one example output; point at the frequency table.
- **Ask:** "If ⟨S²⟩ = 1.2 for a doublet, what does it mean?" **Answer:** large spin contamination (ideal 0.75); the result is less reliable.

### 30–55 ΔG calculator (D5.2)

> **Say:** "Enter the Gibbs free energies. Reactants: minus 232.123456 and minus 76.400000 hartree. Product: minus 308.540000. Compute the difference: product minus reactants equals minus 0.016544 hartree. Multiplied by 627.5095: minus 10.38 kilocalories per mole; minus 43.4 kilojoules per mole; minus 0.450 electron volts. At 298.15 K the equilibrium constant is about 4.1 times 10 to the 7."

- **Do:** enter those numbers in the calculator; change the temperature to 400 K: K changes.
- **Ask:** "What is a realistic uncertainty of a DFT ΔG?" **Answer:** typically a few kcal/mol; K depends exponentially: 1.4 kcal/mol ≈ a factor of 10.
- *Spare:* ask what happens if ΔG is positive.

### 55–65 Boltzmann weights (D5.3)

> **Say:** "Flexible molecules have many conformers. The observed property is a Boltzmann-weighted average. With relative energies 0; 0.5; 1.2; and 2.8 kcal per mole at 298 K, the weights are 63.7; 27.4; 8.4; and 0.6 percent."

- **Do:** change the temperature to 400 K and watch the weights even out; remove the dominant conformer and watch the change.
- **Ask:** "Why can searching only for the single minimum conformer mislead?" **Answer:** conformers within a few kcal/mol also contribute to the spectrum.

### 65–85 Troubleshooting (D5.4)

- **Scenario 1: SCF does not converge.** Causes: unreasonable geometry, wrong spin, poor guess. Actions: check geometry and multiplicity; ORCA SlowConv or Gaussian scf=xqc; start from a small basis and read its orbitals.
- **Scenario 2: optimisation does not converge.** Flat PES, coarse grid: more cycles, finer grid (ultrafine), start from a pre-optimised structure.
- **Scenario 3: small imaginary frequency (< 50 cm⁻¹).** Usually methyl rotation or a coarse grid: tight optimisation with a fine grid.
- **Scenario 4: large imaginary frequency.** A saddle point: follow the mode and re-optimise.
- **Scenario 5: TD-DFT spectrum does not match.** Try CAM-B3LYP, include solvent, compare patterns.
- **Do:** hand out three "broken" outputs you prepared; each group diagnoses in 3 minutes, then presents.

**Assignment.** Compute a reaction ΔG from the Gibbs energies given (a new problem) and give it in kcal/mol, kJ/mol and K at 298 K.

```{=openxml}
<w:p><w:r><w:br w:type="page"/></w:r></w:p>
```

# Course 2 · Session D6 · TD-DFT and UV-Vis Spectra

**Duration:** 90 minutes. **Page:** D6, Results Analyzer. **Learning outcomes:** (1) explain the basis of TD-DFT and the oscillator strength; (2) turn excitation lines into a spectrum; (3) choose a functional and avoid pitfalls; (4) compute LHE.

| Min | Activity |
|---|---|
| 0–10 | Hook |
| 10–30 | D6.1 Short theory |
| 30–60 | D6.2 From lines to a curve |
| 60–75 | D6.3 Pitfalls and practice |
| 75–90 | The full workflow and final assignment |

### 0–10 Hook

> **Say:** "We want to know the colour of a molecule, or how well a dye captures sunlight. From ground-state DFT we only obtain orbitals. For excitations we need response theory: TD-DFT."

### 10–30 Short theory (D6.1)

> **Say:** "TD-DFT gives excitation energies as the poles of the linear density response, through the Casida equation. The Tamm–Dancoff approximation sets the B matrix to zero. Intensity is set by the oscillator strength f, proportional to the excitation energy times the squared transition dipole moment. The wavelength in nanometres equals 1239.84 divided by the energy in electron volts."

- **Ask:** "At what wavelength is a 2.95 eV excitation?" **Answer:** 1239.84/2.95 = 420.3 nm.
- **Ask:** "What does f near zero mean?" **Answer:** a forbidden transition (low intensity).

### 30–60 From lines to a curve (D6.2)

> **Say:** "A TD-DFT result is lines: energy and f. The spectrum is obtained by broadening each line into a Gaussian. Enter three lines: 2.95 eV with f 0.02; 3.75 eV with f 0.85; 4.60 eV with f 0.30. Their wavelengths are 420.3, 330.6 and 269.5 nm. Notice: the peak height depends on the σ you choose, while f does not."

- **Do:** let the σ animation run; turn it off; set σ to 0.1 and 0.6; set the shift to +0.3 eV (blue shift) and −0.3 eV.
- **Ask:** "What does the correction shift mean?" **Answer:** it mimics the functional's systematic error; used to compare with experiment.
- **LHE:** 1 − 10^(−f): for f = 0.85 → 0.859; f = 0.30 → 0.499; f = 0.02 → 0.045.
- **Ask:** "Why can the LHE of a single transition mislead?" **Answer:** experimental bands are broad and overlap; it is a relative measure.

### 60–75 Pitfalls and practice (D6.3)

> **Say:** "First, use the ground-state geometry from an optimisation with no imaginary frequency. Second, include the solvent if the experiment is in solution. Third, the number of states must cover the spectral range, for example 20 to 40. Fourth, pure hybrid functionals underestimate charge-transfer excitation energies; use range-separated functionals and compare. Fifth, transitions carry orbital labels: the squared coefficient is roughly the contribution."

- **Do:** open the Results Analyzer; upload one TD-DFT output; point at the state table: λ, E, f, LHE, transition.
- **Ask:** "Your dye is in toluene; what do you set?" **Answer:** SMD toluene, CAM-B3LYP/def2-TZVP, 20–30 states.

### 75–90 The full workflow and final assignment

> **Say:** "Let us summarise the whole workflow: build the structure in the Molecular Builder, prepare the input in the Input Builder, run on a computer or cluster, check the output with the D5 checklist, then analyse in the Results Analyzer: geometry, frequencies, HOMO and LUMO, spectrum and LHE. Keep everything in a report."

**Check understanding.** (1) The relation between E and λ. (2) The role of the broadening σ. (3) When do you choose CAM-B3LYP?

**Final assignment.** A short report: geometry, frequencies, HOMO/LUMO, spectrum and comparison with experiment or literature for one molecule of your choice. **Rubric:** completeness of method (20%), health checks (20%), analysis and comparison (40%), clarity (20%).


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

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

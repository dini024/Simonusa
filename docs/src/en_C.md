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

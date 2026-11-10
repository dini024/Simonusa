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

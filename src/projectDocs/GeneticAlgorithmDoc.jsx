import {
  DocImage,
  DocVideo,
  DocChapter,
  DocCode,
  DocQuote,
  DocTable,
  DocFile,
  DocYoutube,
  DocImageSet,
  DocLink,
} from "../components/ProjectDocumentation";

function GeneticAlgorithmDoc() {
  return (
    <>
      <DocChapter title="Introduction">
        <p>
          A genetic algorithm is designed to find a solution to a problem that
          can be represented by numbers and evaluated by putting them into an
          equation. It works by iterating through generations of different
          combinations, picking the best ones and creating new solutions based
          on the results.
        </p>

        <p>
          While it is not guaranteed to find the absolute optimum, its main
          strength is coming up with a solution very close to it, in a fraction
          of the time it would take to find the best combination by brute force.
          Below, I explain the usefulness of the algorithm and my Java
          implementation, which can be downloaded from GitHub for free.
        </p>

        <DocLink href="https://github.com/HyenaPirate/Genetic-Algorithm" />
      </DocChapter>

      <DocChapter title="The Knapsack Problem">
        <p>
          This is a classic problem that is perfect to illustrate the power of
          this algorithm. Let's imagine a scenario in which a thief breaks into
          a house. Inside, there are multiple items of different value. The
          thief wants to gain as much as they can from the robbery, so they need
          to decide which items to take.
        </p>

        <p>
          Of course, the best solution would be to take everything. But here's
          the catch: each item has its own weight, and the thief can only carry
          a given amount. This is where deciding what to take and what to leave
          to maximise the gain while still being able to escape comes into play.
        </p>

        <p>
          The thief can make a decision regarding each item, and we can
          represent that as a binary list, where 0 means not taking the item,
          and 1 means taking it. We can call this list a "chromosome".
        </p>

        <DocTable title="An example chromosome for 5 items.">
          <table className="doc-table">
            <thead>
              <tr>
                <th>Flashlight</th>
                <th>Cellphone</th>
                <th>Wallet</th>
                <th>Painting</th>
                <th>Laptop</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </DocTable>

        <DocQuote>
          For humans, it's easier to evaluate the possibilities, but computers
          do not look at this problem the same way we do. This example is just
          for understanding the principle, so let's not look at it from the
          perspective of an actual competent thief.
        </DocQuote>

        <p>
          If the house only contains a handful of items, the calculations can be
          trivial and done easily. But as their amount increases, so does the
          number of possible combinations. For a binary problem like this, it is
          equal to 2<sup>n</sup>, where n is the number of items. Below you can
          see some example values.
        </p>

        <DocTable title="Powers of Two">
          <table className="doc-table">
            <thead>
              <tr>
                <th>Number of items</th>
                <th>Possible combinations</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>2</td>
                <td>4</td>
              </tr>
              <tr>
                <td>3</td>
                <td>8</td>
              </tr>
              <tr>
                <td>5</td>
                <td>32</td>
              </tr>
              <tr>
                <td>8</td>
                <td>256</td>
              </tr>
              <tr>
                <td>10</td>
                <td>1 024</td>
              </tr>
              <tr>
                <td>15</td>
                <td>32 768</td>
              </tr>
              <tr>
                <td>20</td>
                <td>1 048 576</td>
              </tr>
              <tr>
                <td>30</td>
                <td>1 073 741 824</td>
              </tr>
              <tr>
                <td>50</td>
                <td>1 125 899 906 842 624</td>
              </tr>
              <tr>
                <td>100</td>
                <td>1 267 650 600 228 229 401 496 703 205 376</td>
              </tr>
              <tr>
                <td>500</td>
                <td>
                  3 273 390 607 896 141 870 013 189 696 827 599 152 216 642 046
                  043 064 789 483 291 368 096 133 796 404 674 554 883 270 092
                  325 904 157 150 886 684 127 560 071 009 217 256 545 885 393
                  053 328 527 589 376
                </td>
              </tr>
            </tbody>
          </table>
        </DocTable>

        <p>
          This means that to guarantee the best, optimal chromosome for 500
          items by checking each and every one, even with a generous speed of a
          quadrillion combinations per second, it would take about 1.04 × 10¹²⁸
          years. For comparison, this is roughly 7.54 × 10¹¹⁷ (that's 754 with
          115 zeros) times the age of the universe. It's safe to say, it's not
          fast enough for most people.
        </p>
      </DocChapter>

      <DocChapter title="How the Algorithm Works">
        <p>
          Continuing with our knapsack example, we first create a random
          generation. A generation is nothing else but a group of thieves. In my
          code, I called them subjects, as this is more fitting for a wider
          variety of problems.
        </p>

        <p>
          Each subject has its own unique chromosome, which in this first
          generation is picked at random. This means that we start the process
          with a group of thieves, each deciding which items they are going to
          take.
        </p>

        <p>
          The next step is to evaluate their solutions. Each subject has their
          chromosome checked, and from that we can determine:
        </p>

        <ul>
          <li>the total monetary value gained from the items they choose,</li>
          <li>the total weight they need to carry.</li>
        </ul>

        <p>
          Based on these values, we can assign their corresponding fitness. This
          is a very important value, which basically describes how good of a
          solution a subject has. Creating a good fitness calculation is key to
          a working algorithm.
        </p>

        <p>
          For example, let's just set the fitness to be equal to the monetary
          gain. We can imagine that the optimal solution will be to take all the
          items available, as this will maximise the gain and therefore the
          fitness. This is true, and the algorithm will show the chromosome
          filled with 1s as the optimum.
        </p>

        <p>
          But we want to make sure not to overload. This is why we need to
          incorporate the weight into the equation. The fitness calculation I
          designed for this problem looks like this:
        </p>

        <DocCode>
          {`if (totalWeight <= maxWeight) {
    fitness = totalValue + (maxWeight - totalWeight);
} else {
    float excessWeight = totalWeight - maxWeight;
    fitness = -excessWeight * excessWeight;
}`}
        </DocCode>

        <p>This basically covers two scenarios:</p>

        <ul>
          <li>
            If the total weight is under the limit, fitness is equal to the
            monetary gain plus the amount of weight to spare. This rewards
            solutions with a smaller total weight, as it makes them slightly
            easier to carry.
          </li>

          <li>
            If the total weight is over the limit, fitness is equal to the
            negative of the squared excess weight. This punishes the subject for
            exceeding the weight limit, with the punishment becoming much
            stronger the further they stray from the limit.
          </li>
        </ul>

        <DocQuote>
          We do not want to set the fitness to 0 the moment a subject exceeds
          the weight limit. This would not give the subject any indication of
          just how bad their solution is.
        </DocQuote>

        <h1>Selection</h1>
        <p>
          Once every subject has been evaluated, we need to decide which ones
          will be used to create the next generation. This process is called
          selection.
        </p>

        <p>
          The basic idea is simple: better solutions should have a higher chance
          of being selected, while worse solutions should have a lower chance.
          This allows useful characteristics from good solutions to be carried
          into future generations.
        </p>

        <p>
          In my implementation, I use roulette wheel selection. Each subject is
          given a probability of being selected based on its fitness. A subject
          with a higher fitness therefore occupies a larger portion of the
          selection range and has a better chance of being chosen.
        </p>

        <DocQuote>
          Selection does not simply pick the best subjects every time. Giving
          weaker subjects a chance to reproduce helps preserve diversity in the
          population and reduces the risk of getting stuck around a mediocre
          solution.
        </DocQuote>

        <p>
          With that in mind, I implemented an option to re-add one subject with
          the best chromosome into the new generation, in order not to lose the
          progress.
        </p>

        <h1>Crossover</h1>
        <p>
          After selecting subjects, we need to create their offspring. This is
          done through crossover, which combines the chromosomes of two selected
          subjects.
        </p>

        <p>
          The idea is similar to biological reproduction. Instead of creating an
          entirely random chromosome, we take parts of two existing solutions
          and combine them into a new one.
        </p>

        <p>
          For example, imagine that two parents have the following chromosomes:
        </p>

        <DocTable title="Crossover example">
          <table className="doc-table">
            <thead>
              <tr>
                <th>Parent A</th>
                <th>Parent B</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1 0 1 1 0 0 1 0</td>
                <td>0 1 0 0 1 1 0 1</td>
              </tr>
            </tbody>
          </table>
        </DocTable>

        <p>
          A crossover point can be selected somewhere inside the chromosome. The
          genes on one side of that point are then taken from one parent, while
          the remaining genes come from the other.
        </p>

        <DocTable title="Example offspring">
          <table className="doc-table">
            <thead>
              <tr>
                <th>Parent A</th>
                <th>Parent B</th>
                <th>Offspring A</th>
                <th>Offspring B</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1 0 1 1 | 0 0 1 0</td>
                <td>0 1 0 0 | 1 1 0 1</td>
                <td>1 0 1 1 | 1 1 0 1</td>
                <td>0 1 0 0 | 0 0 1 0</td>
              </tr>
            </tbody>
          </table>
        </DocTable>

        <p>
          This allows useful combinations of genes to be passed from one
          generation to the next. The exact crossover method can vary depending
          on the type of chromosome being used.
        </p>

        <h1>Mutation</h1>
        <p>
          Crossover alone is not enough. If we only combined existing
          chromosomes, the algorithm could eventually lose certain possibilities
          completely. This is where mutation comes in.
        </p>

        <p>
          Mutation randomly changes individual genes in a chromosome. For a
          binary chromosome, this can mean changing a 0 into a 1 or a 1 into a
          0.
        </p>

        <DocTable title="Example mutation">
          <table className="doc-table">
            <thead>
              <tr>
                <th>Before</th>
                <th>After</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1 0 1 1 0 0 1 0</td>
                <td>1 0 1 1 1 0 1 0</td>
              </tr>
            </tbody>
          </table>
        </DocTable>

        <p>
          The mutation chance should generally be kept relatively low. If it is
          too high, the algorithm becomes almost completely random and struggles
          to preserve good solutions. If it is too low, the population can lose
          diversity and become stuck around a local optimum.
        </p>

        <p>
          In my implementation, the mutation chance is checked individually for
          each gene. This means that even when a chromosome is selected for
          reproduction, each of its genes has an independent chance of being
          mutated.
        </p>

        <h1>Creating a new generation</h1>
        <p>
          After selection, crossover and mutation have taken place, we have a
          completely new generation of subjects. Each of these subjects has a
          chromosome created from the previous generation, with possible
          mutations applied to it.
        </p>

        <p>
          The new generation is then evaluated in exactly the same way as the
          first one. Their total value and weight are calculated, their fitness
          is determined, and the process begins again.
        </p>

        <p>
          This repeated process is what allows the algorithm to improve its
          solutions over time.
        </p>

        <DocTable title="The basic genetic algorithm cycle">
          <table className="doc-table">
            <thead>
              <tr>
                <th>Step</th>
                <th>Process</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Create a random generation</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Evaluate every subject</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Calculate their fitness</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Select subjects for reproduction</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Perform crossover</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Apply mutations</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Create the new generation</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Repeat</td>
              </tr>
            </tbody>
          </table>
        </DocTable>

        <h1>The result</h1>
        <p>
          After running the algorithm for a sufficient number of generations,
          the population should converge towards increasingly better solutions.
          The best subject from the final generation can then be inspected to
          see which items were selected.
        </p>

        <p>
          Unlike brute force, there is no guarantee that this solution is the
          absolute optimum. The algorithm is instead designed to find a very
          good solution without having to examine every possible combination.
        </p>

        <p>
          This trade-off is the main reason genetic algorithms are useful for
          problems with extremely large search spaces. A brute-force approach
          becomes practically impossible very quickly, while a genetic algorithm
          can continue producing useful results within a reasonable amount of
          time.
        </p>

        <DocQuote title="In short:">
          A genetic algorithm does not try to check every possible answer. It
          tries to learn which parts of the existing answers are useful and
          combine them into better ones.
        </DocQuote>
      </DocChapter>

      <DocChapter title="Implementation Overview">
        <p>
          The main goal of my implementation was not to create a genetic
          algorithm that could only solve one specific problem. Instead, I
          wanted to create a reusable framework that could be adapted to
          different optimisation problems.
        </p>

        <p>
          Because of this, the implementation is divided into several classes,
          each responsible for a different part of the algorithm. The problem
          itself determines how a solution is represented and how its fitness is
          calculated, while the genetic algorithm handles the process of
          evolving the population.
        </p>

        <DocTable title="Main components">
          <table className="doc-table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Purpose</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>ProblemBlueprint</td>
                <td>Defines the common structure for optimisation problems.</td>
              </tr>
              <tr>
                <td>Chromosome</td>
                <td>Represents a possible solution and stores its genes.</td>
              </tr>
              <tr>
                <td>Subject</td>
                <td>
                  Represents an individual solution together with its fitness.
                </td>
              </tr>
              <tr>
                <td>TestManager</td>
                <td>Controls the genetic algorithm and manages generations.</td>
              </tr>
            </tbody>
          </table>
        </DocTable>

        <h1>ProblemBlueprint</h1>
        <p>
          ProblemBlueprint is the base class used for defining individual
          optimisation problems. The genetic algorithm itself does not need to
          know what problem it is solving. Instead, the problem provides the
          information necessary to create a chromosome and evaluate it.
        </p>

        <p>
          Each problem extending this class implements its own method for
          creating a random chromosome and calculating its fitness. This allows
          the same genetic algorithm to work with completely different types of
          problems.
        </p>

        <DocCode>
          {`public abstract Chromosome createRandomChromosome();

public abstract float calculateFitness(Subject subject);`}
        </DocCode>

        <p>
          For example, the Knapsack problem creates a binary chromosome, while
          the Travelling Salesman Problem creates a permutation chromosome. The
          rest of the genetic algorithm can work with both without needing to
          know the details of the problem.
        </p>

        <h1>Chromosome</h1>
        <p>
          A chromosome represents a possible solution to the problem. It is made
          up of individual genes, with each gene representing one part of that
          solution.
        </p>

        <p>
          My implementation uses an abstract Chromosome class with several
          specialised types. This allows different problems to use different
          ways of representing their solutions.
        </p>

        <DocTable title="Chromosome types">
          <table className="doc-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Example use</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Boolean</td>
                <td>Knapsack item selection</td>
              </tr>
              <tr>
                <td>Integer</td>
                <td>Problems requiring integer values</td>
              </tr>
              <tr>
                <td>Float</td>
                <td>Problems requiring decimal values</td>
              </tr>
              <tr>
                <td>Permutation</td>
                <td>Travelling Salesman Problem</td>
              </tr>
            </tbody>
          </table>
        </DocTable>

        <p>
          The chromosome also provides functionality for accessing and modifying
          individual genes, copying chromosomes and performing mutations.
        </p>

        <h1>Subject</h1>
        <p>
          A Subject represents one individual in the population. It contains a
          chromosome representing its solution and the fitness calculated for
          that solution.
        </p>

        <p>
          Keeping the chromosome and its fitness together makes it possible for
          the genetic algorithm to compare individuals and select the most
          suitable ones for reproduction.
        </p>

        <h1>TestManager</h1>
        <p>
          TestManager is responsible for running the genetic algorithm itself.
          It creates and stores the population, evaluates subjects, performs
          selection, crossover and mutation, and replaces the old generation
          with the new one.
        </p>

        <p>
          The problem-specific logic is delegated to ProblemBlueprint, meaning
          TestManager does not need separate implementations for Knapsack, TSP
          or any other problem.
        </p>

        <DocCode>
          {`TestManager test = new TestManager(
    problem,
    500,
    1
);`}
        </DocCode>

        <p>
          In this example, the algorithm is given a problem, a population size
          of 500 subjects and a mutation chance of 1.
        </p>

        <DocQuote>
          The important part of this architecture is the separation between the
          genetic algorithm and the problem being solved. This makes it possible
          to add a new optimisation problem without rewriting the entire
          algorithm.
        </DocQuote>
      </DocChapter>

      <DocChapter title="The Travelling Salesman Problem">
        <p>
          The Travelling Salesman Problem, commonly abbreviated as TSP, is
          another classic optimisation problem. Unlike the Knapsack Problem,
          where each item can independently be selected or rejected, TSP
          requires a specific order of locations.
        </p>

        <p>
          The goal is to find the shortest possible route that visits every
          location exactly once and returns to the starting point.
        </p>

        <h1>The problem</h1>
        <p>
          Imagine a salesman who needs to visit a number of cities. They can
          choose the order in which the cities are visited, but they want to
          travel as little as possible.
        </p>

        <p>
          With only a few cities, it is possible to test every route. However,
          just like the Knapsack Problem, the number of possibilities grows
          extremely quickly as the number of cities increases.
        </p>

        <DocTable title="Example route">
          <table className="doc-table">
            <thead>
              <tr>
                <th>Position</th>
                <th>City</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>A</td>
              </tr>
              <tr>
                <td>2</td>
                <td>C</td>
              </tr>
              <tr>
                <td>3</td>
                <td>B</td>
              </tr>
              <tr>
                <td>4</td>
                <td>D</td>
              </tr>
              <tr>
                <td>5</td>
                <td>A</td>
              </tr>
            </tbody>
          </table>
        </DocTable>

        <h1>Permutation Chromosome</h1>
        <p>
          The TSP cannot use the same binary chromosome as the Knapsack Problem.
          Each city needs to appear exactly once, and therefore the chromosome
          needs to represent an ordering rather than a collection of yes-or-no
          decisions.
        </p>

        <p>
          For this reason, my implementation uses a Permutation chromosome. Each
          gene contains an identifier representing a city, and the order of the
          genes determines the route.
        </p>

        <DocCode>{`[2, 0, 4, 1, 3]`}</DocCode>

        <p>
          This chromosome represents a route visiting cities 2, 0, 4, 1 and 3.
          Because every city appears exactly once, the chromosome represents a
          valid route.
        </p>

        <DocQuote>
          Unlike the Knapsack chromosome, changing a single gene in a
          permutation can create an invalid solution by producing duplicate
          cities or removing another city from the route. This is why mutation
          and crossover need to be handled differently for permutations.
        </DocQuote>

        <h1>Fitness calculation</h1>
        <p>
          For TSP, the quality of a solution is determined by the total length
          of its route. A shorter route is better, which means the fitness needs
          to increase as the route becomes shorter.
        </p>

        <p>
          My implementation calculates the total distance of the route and
          converts it into a fitness value using the following formula:
        </p>

        <DocCode>{`fitness = 1000 / pathLength;`}</DocCode>

        <p>
          This means that a shorter route produces a larger fitness value. For
          example, a route with a length of 100 would receive a fitness of 10,
          while a route with a length of 500 would receive a fitness of 2.
        </p>

        <DocTable title="Example fitness values">
          <table className="doc-table">
            <thead>
              <tr>
                <th>Route length</th>
                <th>Fitness</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>100</td>
                <td>10</td>
              </tr>
              <tr>
                <td>250</td>
                <td>4</td>
              </tr>
              <tr>
                <td>500</td>
                <td>2</td>
              </tr>
              <tr>
                <td>1 000</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </DocTable>
      </DocChapter>

      <DocChapter title="Adapting the Algorithm">
        <p>
          The TSP demonstrates why separating the genetic algorithm from the
          problem itself is useful. The overall process remains the same:
          generations are created, subjects are evaluated, parents are selected
          and new solutions are produced.
        </p>

        <p>
          What changes is the way the chromosome is represented and how the
          fitness is calculated. For Knapsack, a Boolean chromosome is
          appropriate because every item is either selected or rejected. For
          TSP, a Permutation chromosome is required because the order of the
          cities is important.
        </p>

        <DocTable title="Comparison of the implementations">
          <table className="doc-table">
            <thead>
              <tr>
                <th></th>
                <th>Knapsack</th>
                <th>TSP</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Chromosome</td>
                <td>Boolean</td>
                <td>Permutation</td>
              </tr>
              <tr>
                <td>Gene meaning</td>
                <td>Take / don't take</td>
                <td>City identifier</td>
              </tr>
              <tr>
                <td>Goal</td>
                <td>Maximise value</td>
                <td>Minimise distance</td>
              </tr>
              <tr>
                <td>Fitness</td>
                <td>Value and weight</td>
                <td>Inverse route length</td>
              </tr>
            </tbody>
          </table>
        </DocTable>

        <p>
          This is the main advantage of the architecture. The genetic algorithm
          itself does not need to be rewritten every time a new problem is
          added. Instead, a new ProblemBlueprint implementation can provide the
          required chromosome and fitness calculation.
        </p>
      </DocChapter>

      <DocChapter title="Live Graph">
        <p>
          To make it easier to observe how the genetic algorithm behaves while
          it is running, I implemented a live graph using JFreeChart. Instead of
          only displaying the final solution, the graph is updated after every
          generation, allowing the progress of the algorithm to be observed in
          real time.
        </p>

        <p>
          The graph can display several values collected from the best subject
          in each generation. These values allow me to see not only whether the
          fitness is improving, but also how the actual solution changes while
          the algorithm runs.
        </p>

        <DocTable title="Values displayed by the graph in the Knapsack problem">
          <table className="doc-table">
            <thead>
              <tr>
                <th>Value</th>
                <th>Description</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Fitness</td>
                <td>
                  Shows how good the current best solution is according to the
                  problem's fitness function.
                </td>
              </tr>
              <tr>
                <td>Value</td>
                <td>
                  Shows the total monetary value of the items selected by the
                  best Knapsack solution.
                </td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>
                  Shows the total weight of the items selected by the best
                  Knapsack solution.
                </td>
              </tr>
            </tbody>
          </table>
        </DocTable>

        <p>
          The horizontal axis represents the generation number, while the
          vertical axis represents the value being displayed. As the algorithm
          progresses, new points are added to the graph. This makes it possible
          to observe whether the population is improving, stagnating or behaving
          unpredictably.
        </p>

        <DocImage
          src="/assets/projectsData/geneticAlgorithm/ss11.png"
          title="Graph showing the evolution of the algorithm solving the Knapsack problem over 1000 iterations."
        />

        <p>
          One of the most useful aspects of the graph is being able to identify
          convergence. When the best fitness stops increasing significantly over
          a large number of generations, it can indicate that the population has
          reached a point where further evolution is producing little
          improvement.
        </p>

        <DocQuote title="Why this is useful">
          A final fitness value only tells us where the algorithm ended. The
          graph shows how it got there.
        </DocQuote>

        <h1>Live results</h1>
        <p>
          In addition to the graph itself, the interface displays the latest
          values calculated by the algorithm. This gives an immediate numerical
          overview of the current best solution without having to estimate the
          value from the graph.
        </p>

        <p>
          For the Knapsack problem, this includes the current best fitness, the
          total monetary value of the selected items and their total weight.
        </p>

        <DocTable title="Example live results">
          <table className="doc-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Example</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Best Fitness</td>
                <td>3 473.11</td>
              </tr>
              <tr>
                <td>Total Value</td>
                <td>$3 473</td>
              </tr>
              <tr>
                <td>Total Weight</td>
                <td>29.89 kg</td>
              </tr>
            </tbody>
          </table>
        </DocTable>

        <h1>Using the Graph to Evaluate the Algorithm</h1>
        <p>
          The graph is also useful for testing different configurations of the
          genetic algorithm. By changing parameters such as population size,
          mutation chance and the number of generations, I can compare how
          quickly and consistently the algorithm finds good solutions.
        </p>

        <p>
          For example, a configuration that produces a rapid increase in fitness
          followed by a long period of little improvement may have converged
          early. On the other hand, a graph with continuous improvement over a
          large number of generations may indicate that the population still
          contains useful diversity.
        </p>

        <p>
          Because genetic algorithms use randomisation, two runs with exactly
          the same parameters do not necessarily produce identical graphs. This
          makes the visualisation particularly useful for comparing the general
          behaviour of multiple runs rather than relying on a single final
          result.
        </p>

        <DocQuote>
          The live graph turned the algorithm from something that simply
          produces a final answer into something that can be observed and
          analysed while it searches for that answer.
        </DocQuote>
      </DocChapter>

      <DocChapter title="Conclusion">
        <p>
          This project allowed me to implement a genetic algorithm from the
          ground up and test it against different types of optimisation
          problems. The Knapsack Problem demonstrates how the algorithm can work
          with binary decisions, while the Travelling Salesman Problem
          demonstrates how it can work with permutations and ordered solutions.
        </p>

        <p>
          The most important part of the project for me was creating the
          algorithm as a reusable framework rather than implementing a single
          solution for one problem. By separating the problem definition,
          chromosome representation and genetic algorithm itself, new
          optimisation problems can be added without changing the core of the
          system.
        </p>

        <p>
          While a genetic algorithm cannot guarantee finding the absolute
          optimal solution, it provides a practical way of searching enormous
          solution spaces where brute force would be completely impractical.
        </p>

        <DocQuote title="Project source code">
          The complete Java implementation, including the Knapsack and
          Travelling Salesman examples, is available on GitHub.
        </DocQuote>

        <DocLink href="https://github.com/HyenaPirate/Genetic-Algorithm" />
      </DocChapter>
    </>
  );
}

export default GeneticAlgorithmDoc;

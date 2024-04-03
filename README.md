[![LinkedIn][linkedin-shield]][linkedin-url] [![web][web-shield]][web-url] 
[![web][resume-shield]][resume-url]

<h1>Tic Tac Toe - React</h1>
Mini-game built using React and Hook State
<br>
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>Introduction</li>
    <li>Usage</li>
    <li>Breakdown</li>
  </ol>
</details>
<h2>Introduction</h2>
<img src=".//public/project.png" alt="project image">
Using Vite to build React.

<h2>Usage</h2>

```
    npm create vite@latest
    npm install
    npm run dev
```

<h2>Breakdown</h2>

App
    GameBoard
        GameCell

Score of each player will be listed as states
- 0 means not played anything
- 1 means player 1
- 2 means player 2

State Variables:
1. States - array of score in 9 cells
2. nextTurn - X and O represents

Essential functions:
1. Check() - this function will be excute if the player click the cell. Switch between X and O based on the state of the nextTurn
2. setnextTurn() - will set X or O. Changed when player clicked cell.
3. isWinner() - check the winner when re-render pages. Has specific lines that if states[idx] equals to each other in the line will return winner.
4. Reset() - initial the States array to 0s.







[linkedin-url]: https://www.linkedin.com/in/harryph8605/
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge
[web-url]: https://devhuypham.me
[web-shield]:https://img.shields.io/badge/Harry_Pham-F96167?style=for-the-badge
[resume-url]: https://drive.google.com/file/d/1NxrqI-Wi9R3qad9Qz-mI5z1zJ5Yu6m_a/view?usp=sharing
[resume-shield]: https://img.shields.io/badge/Resume-F9E795?style=for-the-badge


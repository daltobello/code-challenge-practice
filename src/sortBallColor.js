function sortBallColor(balls) {

  let sortedBalls = {}

  for(let i = 0; i < balls.length; i++) {
    const color = balls[i].color

    if(!sortedBalls[color]) {
      sortedBalls[color] = []
    }
    sortedBalls[color].push(balls[i])
  }
  return Object.values(sortedBalls).flat()
}

export default sortBallColor

/**
 Prompt: You’re given an array of 20 balls of different sizes and four different colors. Sort them into one array by color, ignoring the sizes.

 GOAL: sort the balls by color
 INPUT: an array of 20 objects, each representing a ball. the object has two properties. color: this can be one of four values: "yellow", "purple", "blue", or "gray".
size: this property can be ignored for this task.
 OUTPUT: a single array containing all 20 balls sorted by color.
 HOW:
 - make an object with 4 properties for each color. the value will be an empty array
 - loop over the balls array of objects 
    - if the current ball element is yellow add it to the yellow property
    - if the 

 */

/*
Brute Force Solution:

    function sortBallColor(balls) {

      let sortedBalls = {
        yellow: [],
        purple: [],
        blue: [],
        gray: []
      }
    
      for(let i = 0; i < balls.length; i++) {
        if(balls[i].color === 'yellow') {
          sortedBalls.yellow.push(balls[i])
        } else if (balls[i].color === 'purple') {
          sortedBalls.purple.push(balls[i])
        } else if(balls[i].color === 'blue') {
          sortedBalls.blue.push(balls[i])
        } else if(balls[i].color === 'gray') {
          sortedBalls.gray.push(balls[i])
        }
      }
     
      return sortedBalls.yellow.concat(sortedBalls.purple, sortedBalls.blue, sortedBalls.gray)
    }

*/


// { color: "yellow", size: "small" },
//       { color: "yellow", size: "small" },
//       { color: "yellow", size: "large" },
//       { color: "yellow", size: "large" },
//       { color: "purple", size: "small" },
//       { color: "purple", size: "medium" },
//       { color: "purple", size: "medium" },
//       { color: "purple", size: "medium" },
//       { color: "purple", size: "large" },
//       { color: "purple", size: "small" },
//       { color: "blue", size: "medium" },
//       { color: "blue", size: "large" },
//       { color: "blue", size: "medium" },
//       { color: "blue", size: "small" },
//       { color: "blue", size: "small" },
//       { color: "gray", size: "large" },
//       { color: "gray", size: "small" },
//       { color: "gray", size: "large" },
//       { color: "gray", size: "medium" },
//       { color: "gray", size: "medium" },
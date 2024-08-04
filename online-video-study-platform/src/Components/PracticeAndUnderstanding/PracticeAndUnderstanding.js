import React from 'react';
import './PracticeAndUnderstanding.css';
// import Layout from '.../Layout';


function PracticeAndUnderstanding() {
  return (
    <section id="practice-understanding">
      <h2>Practice and Understanding</h2>

      <div className="section">
        <h3>Practice Exercises</h3>
        <ul>
          <li><a href="/exercises/ex1">Exercise 1: Basic Concepts</a></li>
          <li><a href="/exercises/ex2">Exercise 2: Advanced Topics</a></li>
          <li><a href="/exercises/ex3">Exercise 3: Practical Application</a></li>
        </ul>
      </div>

      <div className="section">
        <h3>Sample Exam Questions</h3>
        <ul>
          <li><a href="/questions/q1">Question 1: Fundamentals</a></li>
          <li><a href="/questions/q2">Question 2: Complex Scenarios</a></li>
          <li><a href="/questions/q3">Question 3: Case Studies</a></li>
        </ul>
      </div>

      <div className="section">
        <h3>Practice Tests</h3>
        <ul>
          <li><a href="/tests/test1">Test 1: Module 1</a></li>
          <li><a href="/tests/test2">Test 2: Module 2</a></li>
          <li><a href="/tests/test3">Test 3: Final Review</a></li>
        </ul>
      </div>

      <div className="section">
        <h3>Exam Instructions</h3>
        <div className="instructions">
          <h4>Important Guidelines</h4>
          <p>Make sure to review all material thoroughly before attempting the practice tests. Time yourself while taking practice exams to simulate real exam conditions.</p>
        </div>
      </div>
    </section>
  );
}

export default PracticeAndUnderstanding;

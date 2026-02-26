---
name: design-pattern-application
description: Agent capable of analyzing software design problems to select and apply the most appropriate design patterns (Creational, Structural, Behavioral) for optimal solutions. Supports code refactoring and design decision reporting.
---

# Appropriate Design Pattern Application

## Overview

This skill enables the Agent to deep-dive into software design challenges, identifying weaknesses or opportunities for improvement, and proposing/implementing the most suitable design patterns to ensure scalability, maintainability, and efficiency.

## Core Capabilities

### 1. Design Problem Identification
- Identify code smells, duplication, or rigidity in existing systems.
- Analyze requirements for new features to anticipate future extension needs.

### 2. Comprehensive Pattern Knowledge
- Mastery of all classic design pattern categories:
  - **Creational**: Singleton, Factory, Abstract Factory, Builder, Prototype.
  - **Structural**: Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy.
  - **Behavioral**: Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor.

### 3. Contextual Evaluation (Pros & Cons)
- Weigh trade-offs: performance vs. complexity, flexibility vs. readability.
- Consider platform-specific best practices and language constraints.

### 4. Optimal Solution Proposal
- Provide detailed design rationales and architectural integration plans.
- Predict long-term impacts of the chosen pattern.

### 5. Code Generation & Refactoring
- Generate boilerplate or example implementations.
- Refactor existing codebases to apply patterns consistently.

## Workflow

1. **Requirement Gathering & Analysis**: Clarify constraints and goals (performance, maintenance, reusability).
2. **Pattern Exploration**: List potential patterns based on the problem context.
3. **Comparison & Selection**: Build a comparison matrix and select the best fit.
4. **Detailed Design**: Define class structures, interactions, and responsibilities.
5. **Prototyping**: (Optional) Create a small code sample to verify feasibility.
6. **Implementation Recommendation**: Step-by-step guide for integration with best practices.

## Usage Guide

Ask the Agent:
- "Identify design issues in this module and suggest improvements."
- "Which pattern should I use to handle multiple payment providers flexibly?"
- "Refactor this complex conditional logic using the State or Strategy pattern."

## Resources

### references/
- [creational_patterns.md](references/creational_patterns.md): Deep-dive into patterns for object creation.
- [structural_patterns.md](references/structural_patterns.md): Guidelines for composing classes and objects.
- [behavioral_patterns.md](references/behavioral_patterns.md): Reference for object interaction and responsibility distribution.
- [tradeoff_matrix.md](references/tradeoff_matrix.md): A guide for comparing patterns in specific contexts.

### Language-Specific Patterns
- [golang_patterns.md](references/golang_patterns.md): Idiomatic patterns for Go (Options, Concurrency, etc.).
- [php_patterns.md](references/php_patterns.md): Modern PHP and Laravel/Symfony patterns (Service Container, Middleware, etc.).
- [javascript_react_vue_patterns.md](references/javascript_react_vue_patterns.md): Frontend patterns (Hooks, Composition API, State Management).

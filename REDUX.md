#ACTIONS

- iNFLATE_BALLOON
```javascript
  {
    type: INFLATE_BALLOON
  }
```
- DEFLATE_BALLOON
```javascript
  {
    type: DEFLATE_BALLOON
  }
```

- CHOOSE_CARD
```javascript
  {
    type: CHOOSE_CARD
  }
```

#REDUCERS

-pumpItUpReducer
```javascript
  const initialState: {
    score : 0,
    maxScore : 0,
    difficulty: "easy"
  }
```
When INFLATE_BALLON is dispatched, state becomes state + 5
When DEFLATE_BALLON is dispatched, state becomes state - 5


-memoryReducer
```javascript
    const initialState: {
    card1 : null,
    card2 : null,
    remainingCards: 18,
    score: 0,
    maxScore: 0
  }
```
When INFLATE_BALLON is dispatched, state becomes state + 5
When DEFLATE_BALLON is dispatched, state becomes state - 5
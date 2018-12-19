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
    type: INFLATE_BALLOON
  }
```

#REDUCERS

-pumpItUpReducer
```javascript
  const initialState: 0
```
When INFLATE_BALLON is dispatched, state becomes state + 5
When DEFLATE_BALLON is dispatched, state becomes state - 5
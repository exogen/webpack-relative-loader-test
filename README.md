Running `webpack`, you should see:

```
running my loader FROM JS on: 'lol';

running my loader FROM CSS on: 'lol';
```

This is showing that relative loaders are resolved relative to the *requiring*
resource, not the *required* resource.

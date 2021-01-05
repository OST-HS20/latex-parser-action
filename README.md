# latex parser
This github action parses in a naiv way the command value of a latex command. 

With the input parameter *latex_file* and *command_name* the given value *command_value* can be extracted.

**Example**:

The Github Action yaml:
```yml
name: CI

on:
  push:
    branches: [ master ]
    
jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v2

      - uses: OST-HS20/latex-parser-action@V1
        id: latexparser
        with:
          latex_file: main.tex
          command_name: version
          
      - name: The command value
        run: echo "Version is ${{steps.latexparser.outputs.command_value}}"
       
```

The main.tex:
```latex
\newcommand{\version}{1.1}
```

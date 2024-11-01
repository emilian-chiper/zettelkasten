### Meta
2024-10-25 21:51
**Tags:** [[c]] [[c_objects_functions_types]]
**Status:** #completed 

### Function Types
*Function types* are derived types. In this case, the type is derived from the return type and the number and types of its parameters. The return type of a function cannot be an array type.

When you declare a function, you use the *function declarator* to specify the name of the function and return type. If the declarator includes a parameter type list and a definition, the declaration of each parameter must include an identifier, except parameter lists with only a single parameter of type `void`, which needs no identifier.

Here are a few function type declarations:
```C title:function_declarations.c
int f(void);
int *fip();
void g(int i, int j);
void h(int, int);
```

First, we declare a function `f` with no parameters that returns an int`int`. Next, we declare a function `fip` with no specified parameters that returns a pointer to an `int`. Finally, we declare two functions, `g` and `h`, each returning `void` and taking two parameters of type `int`.

Specifying parameters with identifiers (as done here with `g`) can be problematic if an identifier is a macro. However, providing parameter names is a good practice for self-documenting code, so omitting the identifiers (as in `h`) is not typically recommended.

In a function declaration, specifying parameters is optional. However, failing to do so is occasionally problematic. If you write the function declaration for `fip` in C++, it would declare a function accepting any number of arguments of any type and returning an `int *`.

You should never declare functions with an empty parameter list in C. First, this is a deprecated feature. Second, the code could be ported to C++, so explicitly list parameter types and use `void` when there are no parameters.

A function type with a parameter list is know as a *function prototype*. A function prototype informs the compiler about the number and types of parameters a function accepts. Compilers use this information to verify that the correct number and type of parameters are used in the *function definition* and any calls to the function.

The function definition provides the actual implementation the function.
```C title:definition_example.c
int max(int a, int b)
{ return a > b ? a : b; }
```

The return type specifier is `int`; the function declarator is `max(int a, int b)`, and the function body is `{ return a > b ? a : b }`. The specification of a function must not include any type qualifier. The function body itself uses the condition operator (`? :`). This expression states that if `a` is greater than `b`, return `a`; otherwise, return `b`.
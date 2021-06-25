var documenterSearchIndex = {"docs":
[{"location":"#ParameterHandling.jl","page":"Home","title":"ParameterHandling.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [ParameterHandling]","category":"page"},{"location":"#ParameterHandling.bounded-Tuple{Real,Real,Real}","page":"Home","title":"ParameterHandling.bounded","text":"bounded(val::Real, lower_bound::Real, upper_bound::Real)\n\nConstructs a Bounded. The value of a Bounded is a Real number that is constrained to be within the interval (lower_bound, upper_bound), and is equal to val. This is represented internally in terms of an unconstrained_value and a transform that maps any real to this interval. unconstrained_value is inv(transform)(val).\n\n\n\n\n\n","category":"method"},{"location":"#ParameterHandling.deferred-Tuple{Any,Vararg{Any,N} where N}","page":"Home","title":"ParameterHandling.deferred","text":"deferred(f, args...)\n\nThe value of a deferred is f(value(args)...). This makes it possible to make the value of the args e.g. AbstractParameters and, therefore, enforce constraints on them even if f knows nothing about AbstractParameters.\n\nIt can be helpful to use deferred recursively when constructing complicated objects.\n\n\n\n\n\n","category":"method"},{"location":"#ParameterHandling.fixed-Tuple{Any}","page":"Home","title":"ParameterHandling.fixed","text":"fixed(val)\n\nRepresents a parameter whose value is required to stay constant. The value of a Fixed is simply val. Constantness of the parameter is enforced by returning an empty vector from flatten.\n\n\n\n\n\n","category":"method"},{"location":"#ParameterHandling.flatten","page":"Home","title":"ParameterHandling.flatten","text":"flatten(x)\n\nReturns a \"flattened\" representation of x as a vector of real numbers, and a function unflatten that takes a vector of reals of the same length and returns an object of the same type as x.\n\nunflatten is the inverse of flatten, so\n\njulia> x = (randn(5), 5.0, (a=5.0, b=randn(2, 3)));\n\njulia> v, unflatten = flatten(x);\n\njulia> x == unflatten(v)\ntrue\n\n\n\n\n\n","category":"function"},{"location":"#ParameterHandling.positive","page":"Home","title":"ParameterHandling.positive","text":"positive(val::Real, transform::Bijector=Bijectors.Exp(), ε::Real = 1e-12)\n\nReturns a Postive. The value of a Positive is a Real number that is constrained to be positive. This is represented in terms of an a transform that maps an unconstrained_value to the positive reals. Satisfies val ≈ transform(unconstrained_value)\n\n\n\n\n\n","category":"function"},{"location":"#ParameterHandling.value-Tuple{Any}","page":"Home","title":"ParameterHandling.value","text":"value(x)\n\nReturn the \"value\" of an object. For AbstractParameters this typically applies some transformation to some data contained in the parameter, and returns a plain data type. It might, for example, return a transformation of some internal data, the result of which is guaranteed to satisfy some contraint.\n\n\n\n\n\n","category":"method"}]
}
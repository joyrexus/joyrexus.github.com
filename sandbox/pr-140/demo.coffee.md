PR#140
======


## WAT?

Testing out the enhanced coffeescript highlighting mode, courtesy of [Cédric Néhémie](https://github.com/isagalaev/highlight.js/pull/140).


## Main Example

    mixin = {
      foo: (a="default", b={x:10,y:20}, c=(1.2 * 455) / 7) -> /default/.exec m

      get: (id=(if b? then 'A' else 'B'), b=true) -> @member[id]

      prop: 10

      meta: class Meta
        @interpolate: """
            ... #{
              class Foo
                get: (x) -> if /^[abc]/g.test x then "#{x}t" else x

              new Foo().get 'bar'
          } ...
          """
    }


## Native

    require 'foo'
    module.exports = {}
    exports.foo = ->
    console.log 'foo'
    print bar


## Assignment

    number = 42
    opposite &&= true
    exists ?= {}
    [a,b] = o
    {a,b:c} = o
    o =
      bar: foo,
      foo: bar
    o = {a, b, c: 10}
    o = {
      a,
      b,
      c: 10
    }


## Constants

To match ruby conventions, words in upper case will be marked as constant.

    CONSTANT = 302
    I18n = 112
    NATIVES = [ Date, String, Array, JSON, RegExp ]

    d = new Date ()
    d.setDate()


## Conditions

    number = -42 unless opposite is 'foo' and typeof bar isnt 'function'


## Functions

    square = (x) -> x * x
    mouseup=(e)=> null
    monade = (a) -> (b) -> (c) ->
    noarity = ->


## Selectors

    $("foo")
    $$('foo')


## Prototype

    @::__super__.defRGB
    Foo::bar = -> foo()


## Interpolation

    single = 'This is \' not an #{interpolation}'
    single = 'This is a string on
    multiple lines'
    double = "And the \" number is #{ number * 20 * @multiplier }"
    double = "And the \" number is #{ foo "bar #{ 10 }" }"
    double = "And the \" number is #{ foo {a, b: 10} }"
    double = "And the \" number is #{ foo {a, b: "foo #{ {c: 10} }"} }"


## Arrays

    list = [1, 2, 3, 4, 5]
    list = [0..5]


## Splats

    race = ( winners, runners... ) ->
      print winner, runners


## Existence

    alert "I knew it!" if elvis?


## Comprehensions

    cubes = math.cube num for num in list

    cubes = (math.cube num for num in list)


## Loops

    (a= i; b = 1+i; c = i*2) for i in [0..2]
    console.log k,v for k,v of hash


## Classes

    class A extends Module
    class B extends A
    class Animal
      @static: foo
      property:10

      constructor: (@name = "hello") -> @bar = "foo"

      move: (meters) ->
        alert "#{ @name } moved #{ meters }m."

    bud = new Animal


## Divisions

    6/foo/i
    6 /foo
    6 / foo
    6 /foo * 2/gm
    f /foo
    f / foo / gm
    f /foo * 2/6


## Regexps

    f /6 * 2/gm
    f /foo * 2/gm
    re = /^.*mymatch[\s]+(foo){1,5}\n$/gmi
    re =  /[,?;.:/!Â§*%=\[\](){}'"`\\_<>-^]/g
    args = [/^default$/, 'js']
    args = [/^default$/]
    args = {re: /^default$/}
    args = foo(/^\/[/]$/)
    args = /default/.exec


## Heregex

    re = ///foo#{@bar}///
    re = /// ^ (
      #{ @interpolated coffee }
      ?: [-=]>             # function
      | [-+*/%<>&|^!?=]=  # compound assign / compare
      | >>>=?             # zero-fill right shift
      | ([^-+:])\1        # doubles
      | ([&|<>])\2=?      # logic / shift
      | \?\.              # soak access
      | \.{2,3}           # range or splat
      (?=adf)             # TODO foo
      \.foo               # FIXME foo
      (?!n)
    ) ///gi


## Block Comments

    ###

      TODO something
      FIXME something else

      Some `code` in a block comment

    ###


## Heredocs

    heredocs_double = """with interpolation #{14 * foo.bar()}"""
    heredocs_double = """
    Hello "world" and 'world' and #{ number / @divider }
    """

    heredocs_single = '''without #{interpolation}'''
    heredocs_single = '''
    Hello 'world' and "world" and not an #{interpolation}
    '''


    ## Some documentation
    #### Some other documentation
    ##### Deep title
    # TODO
    # FIXME
    # Some code `code` in a comment
    #
    #  1. Ordered list item 1
    #  2. Ordered list item 2
    #  3. Ordered list item 3
    #
    #  * Unordered list item
    #  + Unordered list item
    #  - Unordered list item
    #
    # But `1.`, `*`, `+` or `-` shouldn't be colored
    # when not preceded by two spaces.
    #
    # *italic*
    # **bold**
    #
    # Some code in the comments
    #
    #     # With comments
    #     class Foo
    #       constructor: ->
    #         @bar = 10
    #         @foo = @bar * 1354
    #         @string = "kdsmflk"
    
## Embedded Javascript
    
    `function () { return 'foo'; }`

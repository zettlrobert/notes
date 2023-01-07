# GO

- strong and statically typed
  - type of variable can not change over time - all variables have to be defined at compile time.
- Excellent community
- Key features
  - Simplicity - Simplicity is important, leave out unnecessary features and complexity
  - Fast compile times - Go focuses on keeping compile times down
  - Garbage collected langauge - Go manges memory BUT you can do it yourself
  - Built in concurrency - concurrency primitives are directly built in
  - Compile to standalone binaries - everything is bundled in that binary including libraries and runtimes

# Available Ressources

- [Offical Go Page](https://golang.org)
- [Documentation](https://golang.org/doc/)
- [Go Packages](https://golang.org/pkg/)
- [Go Bridge Community](https://golangbridge.org)

## Entrypoint

- the main function is always the entry point for every go program
- fmt is the package which is responsible for formatting

# Intalling Go

- [Instructions](https://golang.org/doc/install)
- download go
- if GOROOT is set be careful when upgrading and changing go binaries
- extract the go archive to /usr/local - on first install you can not remove the directory as there is none.

        rm -rf /usr/local/go && tar -C /usr/local -xzf go1.16.4.linux-amd64.tar.gz

- Add /usr/local/go/bin to the PATH environment variable.

        export PATH=$PATH:/usr/local/go/bin

- Update the $GOPATH - since GO 1.11 a GOPATH is not needed anymore.
  You can create module root in your project directory.

        export GOROOT=/usr/local/go
        export GOPATH=$HOME/development/go
        export PATH=$PATH:$GOROOT/bin:$GOPATH/bin

- Alternative
  export GOROOT=/usr/local/go
  export PATH=$PATH:$GOROOT/bin

        export GOPATH=/home/development/go
        export PATH=$PATH:$GOPATH/bin

- create folder setup

        mkdir -p ~/development/go/src/github.com/zettlrobert

## Workspaces in go

Create a workspace folder called src/

Here's an example directory layout:

```
    /GOPATH
        src/
            github.com
                zettlrobert
                        project_1
                                projectfiles
                        project_2
                                projectfiles
            foo/
                bar/               (go code in package bar)
                    x.go
                quux/              (go code in package main)
                    y.go
        bin/
            quux                   (installed command)
        pkg/
            linux_amd64/
                foo/
                    bar.a          (installed package object)
```

## Test Applications

- Use go run to test it
- go build github.com/zettlrobert/firstname - main.go is required
- go install github.com/user/app - installs locally to bin

# Variables in GO

## Variable declaration

- can be initalized with zero value: var i int - set with i = 4
- can be initalized instantly: var i int = 1
- can be initalized and assgined with i := 1
- Can't redeclare variables, but can shadow them
- Package Level scope gets overwritten by shadow level scope (inside function)
- Variables always must be used

Visibility

- lower case first letter for package scope
- upper case first letter to export
- no private scope
- blockscope variables inside functions - never visible outside of the block

Naming conventions

- Pascal or camelCase
  - Capitalilze acronyms (HTTP, URL)
- As short as reasonable
  - longer names for longer lives

Type conversions

- destinationType(variable)
- use strconv pacakge for strings
- type conversions which might looses information it has to be done manually

# Primitives

The default data types are correct most of the time. If a specific data type is needed refer to the documentaiton

## Boolean type

- values are true or false
- not an alias for other types
- zero value is false

## Numeric types

### Integers

Signed integers - have plus or minus bit

- int type has varying size, but min 32 bits
- 8bit (int8) through 64 bit (int64)

Unsigned integers - only positive

- 8bit (byte and uint8) thourgh 32 bit (unit32)

Arithmetic operations

- Addition, substraction, multiplication, division, remainder

Bitwise operations

- and, or, xor, and not - &, |, ^, &^

Zero value is 0 - initiated integer without assgined value is always 0

Can't mix types in same family! (uint16 + uint32 = error)

### Floating point numbers

- Follow IEEE-754 standard
- Zero value is 0
- 32bit and 64 bit versions
- Literal styles
  - Decimal (3.14)
  - Exponential (13e18 or 2E10)
  - Mixed (10.7e12)
    Arithmetic operations
  - addition, substraction, multiplication, division

### Complex Numbers

- Zero value is (0+0i)
- 64 and 128 bit versions
- Built in functions
  - complex - make complex number form two floats
  - real - get real part as float
  - imag - get imaginary part as float
- Arithmetic operations
  - addition, substraction, multiplication, division

### Strings

- UTF-8
- immutable
- can be concatenated with plus (+) operator
- can be converted to []byte

### Rune

- UTF-32
- Alias for int32
- Special methods normally required to process
  - e.g. strings,Reader#ReadRune

# Bit Shifting

a := 8 // 2^3

- << x - bitshift left x places // 2^3 \* 2^3 = 2^6
- > > x - bithsift right x places // 2^3 / 2^3 = 2^0

# Constants

- Immutable, but can be shadowed
- Replaced by the compiler at compile time

  - Value must be calculable at compile time

- Named like variables

  - PascalCase for exported constatns
  - camelCase for internal constatns

- Typed constatns work like immutable variables

  - Can interoperate only with same type

- Untyped constants work like literals

  - Can interpolate with similar types

- Enumerated constants

  - Special symbol iota allows related constatns to be created easily
  - Iota starts at 0 in each const block and increments by one
  - Watch out of constant values that match zero values for variables

- Enumerated expressions
  - Operations that can be determined at compile time are allowed
    - Arithmetic
    - Bitwise operations
    - Bitshifting

# Arrays and Slices

Arrays

- Collection of items with same type
- Fixed size
- Declration styles
  - a := [3]int{1, 2, 3} -- literal style
  - a := [...]int{1, 2, 3} -- shorthand + updates length automatically
  - var a [3]int -- zeroed out and all have value 0
- Access via zero-based index
- len function returns size of array
- Copies refer to different underlying data

Slices

- backed by array
- Creation styles
  - Slice existing array or slice
  - Literal style
  - Via make function
    - a := make([]int, 10) // create slice with capacity and length == 10
    - a := make([]int, 10, 100) // slice with length == 10 and capacity == 100
- len function returns length of slice
- cap function returns length of underlying array
- append function to add elements to slice
  - May cause expensive copy operation if underlying array is too small
- Copies refer to same underlying array

# Maps and Structs

Maps

- Collection of value types that are accessed via keys
- Created via literals or via make funciton
- Members accesses via [key] syntax
  - myMap["key"] = "value"
- Check for presence with "value, ok" form of result
- Multiple assignemnets refer to same underlying data

Structs

- Collection of disparate(any type of data) data types that describe a single concept
- Keyed by named fields
- Normally created as types, but anonymous structs are allowed
- Structs are vlaue types
- No inheritance, but can use composition via embedding
- Tags can be added to struct fields to describe field

# Control Flow

If Statements

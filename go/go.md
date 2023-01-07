# Installing Go

- download go
- extract the go archive to /usr/local - on first install you can not remove the directory as there is none.

        rm -rf /usr/local/go && tar -C /usr/local -xzf go1.16.4.linux-amd64.tar.gz

- Add /usr/local/go/bin to the PATH environment variable.

        export PATH=$PATH:/usr/local/go/bin

- Update the $GOPATH - since GO 1.11 a GOPATH is not needed anymore.
  You can create module root in your project directory.

        export GOROOT=/usr/local/go
        export GOPATH=$HOME/development/go
        export PATH=$PATH:$GOROOT/bin:$GOPATH/bin

- create folder setup

        mkdir -p ~/development/go/src/github.com/zettlrobert

# Code organization

Go programs are organized into packages.

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

# Fist program

Inside your GOPATH/src/user/ create your first project.
Or initialize a go programm inside a folder with:

        go mod init github.com/user/programname

# Neovim

### Building Neovim

1.  Build prerequisites

[https://github.com/neovim/neovim/wiki/Building-Neovim#build-prerequisites](Prerequiesites)

     sudo apt-get install ninja-build gettext libtool libtool-bin autoconf automake cmake g++ pkg-config unzip

2. Clone neovim/neovim

3. Build Neovim select desired branch

   make CMAKE_BUILD_TYPE=Release

install prefix for desired location (path)

    make /usr/bin/nvmin=$HOME/local/nvim install

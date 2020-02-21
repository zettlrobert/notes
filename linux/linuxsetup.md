# Linux System Setup

## Installed Packags
1. vim
1. zsh
1. ohmyzsh
1. fonts-powerline(from repository)

## Configuration
### [Install zsh](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH)
   
    $ sudo apt install fonts-powerline 

    $ sudo apt install zsh

### [ohmyzsh](https://github.com/ohmyzsh/ohmyzsh)

    $ sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

 * ZSH_THEME="agnoster"
 * export UPDATE_ZSH_DAYS=3 
 * plugins=(git zsh-autosuggestions zsh-autosuggestions zsh-syntax-highlighting)


### [fonts-powerline](https://github.com/powerline/fonts.git)

	$ git clone https://github.com/powerline/fonts.git --deph=1

	$ cd fonts && ./install.sh

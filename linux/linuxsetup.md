# Linux System Setup

## Gnome Extensions
* Auto move windows
* Caffeine
* Clipboard indicator
* Dash to dock
* Easy docker containers
* Hide activites button
* KStatusNotifierItem/AppIndicator Support
* Lock keys
* Netspeed
* Openweather
* Removable drive menu
* Ressource monitor
* Sound input & output device chooser
* User themes
* Vpn indicator
* Gtile

## Installed Packags
1. vim
1. zsh
1. ohmyzsh
1. fonts-powerline(from repository)
1. kitty
1. gnome-tweaks
1. pulseeffects
1. pulsaudio
1. unzip
1. papirus icons
1. flatpak
1. pomodoro
1. [nordvpn](https://support.nordvpn.com/Connectivity/Linux/1325531132/Installing-and-using-NordVPN-on-Debian-Ubuntu-and-Linux-Mint.htm)
1. [Discord](https://discordapp.com)


## AppImages
1. Bitwarden


## Configuration
### [Install zsh](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH)
   
	$ sudo apt install fonts-powerline 

	$ sudo apt install zsh

### [ohmyzsh](https://github.com/ohmyzsh/ohmyzsh)

	$ sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

 * ZSH_THEME="agnoster"
 * export UPDATE_ZSH_DAYS=3 

#### Plugins
Navigate to ~/.oh-my-zsh/custom/plugins/
    
	$ git clone [autosuggestions](https://github.com/zsh-users/zsh-autosuggestions) ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions
	$ git clone [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting) ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting
 
 * plugins=(git zsh-autosuggestions zsh-autosuggestions zsh-syntax-highlighting)



### [fonts-powerline](https://github.com/powerline/fonts.git)

	$ git clone https://github.com/powerline/fonts.git --deph=1

	$ cd fonts && ./install.sh

## Kitty

	$ sudo apt install kitty

Set kitty as default Terminal
 
	$ sudo update-alternaitves --config x-terminal-emulator

#### Settings CTRL + Shift + f2
Opacity: opacity 0.8
Next Window: CTRL+m
Prevoius Window: CTRL+n


## Sound
Set 24bit sample-format and 48000 in /etc/pulse/daemon.conf
* default-sample-format = s24le
* default-sample-rate = 48000

	$ pulseaudio -k

	$ pulseaudio

#### Install Pulse Effects

	$ sudo add-apt-repository ppa:mikhailnov/pulseeffects -y

	$ sudo apt install pulseeffects pulseaudio

#### [Pulseeffect Presets](https://github.com/JackHack96/PulseEffects-Presets)

Extract files to ~/.config/PulseEffects/output


## Theming
Install User themes and browser extension to install gnome extensions

#### [Material Black Theme](https://github.com/rtlewis88/rtl88-Themes)

* Install dependency Murrine theme engine
* Extract tar.xz to ~/.themes/ or /usr/share/themes
* activate with GNOME Tweak Tool

##### For Icons
* Papirus
* Suru++ and Numix icons and folers

* extract tar.xz into ~/.icons/ or /usr/share/icons/
* use Gnome Tweak Tools
* on Ubuntu use papirus ppa and package to install


## Development

#### Codium

	$ wget -qO - https://gitlab.com/paulcarroty/vscodium-deb-rpm-repo/raw/master/pub.gpg | sudo apt-key add - 

	$ echo 'deb https://gitlab.com/paulcarroty/vscodium-deb-rpm-repo/raw/repos/debs/ vscodium main' | sudo tee --append /etc/apt/sources.list.d/vscodium.list 

	$ sudo apt update && sudo apt install codium


### NVM
	$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash

insert path to .zshrc

### Node

	$ nvm install node


### Go

	
### Flutter


### Docker
	 

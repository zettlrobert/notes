# Linux System Setup

## Gnome Extensions
* Auto move windows
* Caffeine
* Clipboard indicator
* Dash to dock
* Easy docker containers
* Hide activites button
* Kstatusnotifieritem/appindcator support
* Lock keys
* Netspeed
* Openweather
* Pomodoro
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
1. pulseeffects
1. pulsaudio
1. unzip


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

<<<<<<< HEAD
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

	$ sudo apt install pulseeffects pulseaudio --install-recommended

#### [Pulseeffect Presets](https://github.com/JackHack96/PulseEffects-Presets)


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


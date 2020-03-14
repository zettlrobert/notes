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
* Workspace Indicator


## Installed Packages
1. vim
1. zsh
1. ohmyzsh
1. fonts-powerline(from repository)
1. kitty
1. gnome-tweaks
1. gtk2-engines-murrine
1. pulseeffects
1. pulsaudio
1. unzip
1. papirus icons
1. flatpak
1. [pomodoro](gnome-shell-pomodoro)
1. [nordvpn](https://support.nordvpn.com/Connectivity/Linux/1325531132/Installing-and-using-NordVPN-on-Debian-Ubuntu-and-Linux-Mint.htm)
1. [Discord](https://discordapp.com)
1. [Franz](https://meetfranz.com)
1. [papirus-icon-theme](https://github.com/PapirusDevelopmentTeam/papirus-icon-theme#installation)
1. [openrazer/stable](https://openrazer.github.io/#download)
1. [polychromatic/stable](https://github.com/polychromatic/polychromatic)
1. timeshift
1. google-chrome-stable
1. neofetch
1. ntfs-3g
1. nfs-common
1. cifs-utils
1. ffmpeg
1. obs-studio
1. beets
1. spotify-client
1. timeshift
1. deja-dup
1. locate
1. libmediainfo-dev
1. deluge
1. cuetool
1. shntool
1. flacon
1. vlc
1. youtube-dl
1. pdftk


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
 
 * plugins=(git zsh-autosuggestions zsh-syntax-highlighting)



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


#### zsh theme [powerlevel10k](https://github.com/romkatv/powerlevel10k#meslo-nerd-font-patched-for-powerlevel10k)
* install fonts 
 * MesloLGS NF Regular.ttf
 * MesloLGS NF Bold.ttf
 * MesloLGS NF Italic.ttf
 * MesloLGS NF Bold Italic.ttf

	$ fc-cache -fv

* clone theme into oh-my-zsh custom/themes/

	$ git clone https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k

* set ZSH_THEME in .zshrc



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
* candy-icons

* extract tar.xz into ~/.icons/ or /usr/share/icons/
* use Gnome Tweak Tools
* on Ubuntu use papirus ppa and package to install


### [Razer Peripherals](https://openrazer.github.io/#download)
* add openrazer/stable
* [polychromatic](https://github.com/polychromatic/polychromatic)
* add user to group plugdev
	$ sudo gpasswd -a $USER plugdev


### Storage devices
* create folders /media/mountfolder
* edit /etc/fstab


### Insync
Install with .deb
Install nautilus package


### Snap

	$ sudo apt install snapd

Update with snap refresh


#### OBS
ffmpeg required

	$ sudo add-apt-repository ppa:obsproject/obs-studio



# Development

#### Codium

	$ wget -qO - https://gitlab.com/paulcarroty/vscodium-deb-rpm-repo/raw/master/pub.gpg | sudo apt-key add - 

	$ echo 'deb https://gitlab.com/paulcarroty/vscodium-deb-rpm-repo/raw/repos/debs/ vscodium main' | sudo tee --append /etc/apt/sources.list.d/vscodium.list 

	$ sudo apt update && sudo apt install codium


### NVM
	$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash

insert path to .zshrc

### Node

	$ nvm install node

#### Postman

	$ sudo snap install postman	

	
Download and extract Postman, to create Desktop integration place a file:

	~/.local/share/application/Postman.desktop

Content:

[Desktop Entry]
Encoding=UTF-8
Name=Postman
Exec=/opt/Postman/app/Postman %U
Icon=/opt/Postman/app/resources/app/assets/icon.png
Terminal=false
Type=Application
Categories=Development;


#### MongoDB Compass
Download and install .deb


### [Go](https://golang.org/doc/install)
* download go
* extract and move to /usr/local
* add path to .profile or .zshrc
* create space to save go projects(goworkspace) add to GOPATH

	export GOPATH=/media/zerodev/go
	export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin


	
### [Flutter](https://flutter.dev/docs/get-started/install/linux)

##### System Requirements for Fluter
bash, curl, git 2.x, mkdir, rm, unzip, which, xz-utils, zip

1. Get source code from [Flutter repo](https://github.com/flutter/flutter)
1. clone it to the dir where you want flutter to live
1. edit shell rc and add PATH, change path to where flutter lives

	$ export PATH="$PATH:[PATH_TO_FLUTTER_GIT_DIRECTORY]/flutter/bin"

1. must me absolute path
1. echo $PATH
1. which flutter
1. run flutter doctor

#### Android setup
Flutter relies on a full installation of Android STudio to supply its Android platform dependencies.

1. Download [Android Studio](https://developer.android.com/studio)
1. install required libraries

	$ sudo apt-get install libc6:i386 libncurses5:i386 libstdc++6:i386 lib32z1 libbz2-1.0:i386

1. extract tar -xvf android...
1. move to /usr/local/ for logged in user /opt/ for shared installation
1. intall open-jdk

	$ sudo apt install defualt-jdk

1. KVM/ For Emulator in accelerated mode
 1. check if kvm is supported, output must be 1 or more

	$ egrep -c '(vmx|svm)' /proc/cpuinfo

	$ sudo apt-get install qemu-kvm libvirt-daemon-system libvirt-clients bridge-utils


1. execute, navigate to android-studio&bin& and execute studio.sh
1. create virtual device in Android Studio with Android ADK
1. create desktiop entry in Android Studio tools --> generate desktop entry
1. install flutter and dart plugin
1. install SDK Tools
1. Set Path in .zshrc
1. run flutter upgrade if there re errors



### [Docker](../docker/README-old.md)
	 

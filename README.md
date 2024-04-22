# dotfiles

the .config files for my Hyprland rice.

my dotfiles for Hyprland, themed around the KDE Plasma "Mountain" background (i really like it)

tested exclusively on nvidia. if not using nvidia, please comment out the "~/.config/hypr/modules/nvidia.conf" file.

> [!NOTE]
> might become outdated fast (because im bad at being productive)  
> 
> these are my personal dotfiles. if you don't like something about it, you can fork it or something idk

> [!IMPORTANT]
> these are experimental dotfiles. things can and will break. do not attempt to daily drive this until it is in the "main" branch.

# required packages (arch)
-  hyprland
-  hyprlock
-  hypridle
-  aylurs-gtk-shellᴬᵁᴿ (top bar)
-  swaync (notification center)
-  hyprpaperᴬᵁᴿ (background)
-  wofi (app launcher)
# optional packages
-  [fancygrim](https://github.com/memyboi/fancygrim) (my own creation) (screenshotting)
-  wlogoutᴬᵁᴿ (logout menu)
-  xdg-desktop-portal-hyprland (screensharing)
-  xdg-desktop-portal-gtk (filepicker)
-  polkit-kde-agent (giving root perms)
-  io.missioncenter.MissionCenter (flatpak) (task manager)


# features
-  a fully functioning bar made with ags
    - arch flex (i use arch btw)
    - clock (for telling time)
    - notifications (right now, just opens swaync)
    - titlebar
    - animated workspace switcher (inspired by gnome)
    - system tray
    - control panel (incomplete)
-  hyprland
    - many benefits, too many to list :P
    - wayland
-  made for nvidia
    - still has a few quirks tho, due to the drivers
-  cool lock screen
    - pc locks after 30 minutes of inactivity

# keybinds
- open application launcher w/ Super+R
- lock your pc with Super+L
- kill apps with Super+X
- power menu with Super+M
- move workspaces 1-10 w/ Super+0 & Super+1-9
- full screenshot with Super+Shift+S
- area screenshot with Super+Shift+X
- window screenshot with Super+Shift+Z
- special workspace with Super+O
- swap keyboard layouts with Super+H
- open task manager with Ctrl+Shift+Esc (io.missioncenter.MissionCenter flatpak required)
- add ur own keybinds in ~/.config/hypr/modules/binds.conf ([guide](https://wiki.hyprland.org/Configuring/Keywords/))

# preview
<img src="preview/1new.png">
<img src="preview/2new.png">
<img src="preview/3new.png">
<img src="preview/4new.png">
<img src="preview/5new.png">

# installation
- make sure you use a display manager that supports the wayland session (eg sddm, gdm)
- install hyprland
- boot into hyprland with the `Hyprland` command in tty, or through your display manager of choice
- double check hyprland opens. [you may need to set kernel parameters](https://wiki.hyprland.org/Nvidia/) if you use nvidia.
- install required packages (and optional packages if you'd like)
- import dotfiles from this repo
- configure ~/.config/hypr/modules/monitor.conf [using this guide](https://wiki.hyprland.org/Configuring/Monitors/)
- remove ~/.config/hypr/modules/nvidia.conf if not using a nvidia card 
- open hyprland
- done

# post-installation
- to configure things like keybinds, there is a folder called modules in ~/.config/hypr. this is to organise your settings, and to make things more streamlined. follow the format that the file already has, and you'll be able to bind keybinds in the way you want.

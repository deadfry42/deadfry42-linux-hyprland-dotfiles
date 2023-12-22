# dotfiles

the .config files for my Hyprland x KDE rice

dot files for Hyprland, themed around the KDE Plasma default background (as of plasma 5.27)

these dotfiles do not include any monitor config, as that is specific to your setup.
please follow the guide at https://wiki.hyprland.org/Configuring/Monitors/ for information on how to do this. (its in the hyprland.conf file)

tested on a nvidia gpu, on arch and debian.
installed on arch w/ hyprland-nvidiaᴬᵁᴿ w/ yay
installed on debian w/ compiling from source

note: might become outdated fast because of how indecisive i am sometimes (which is all the time btw) also adhd or something idfk im not diagnosed

# required packages
 -  hyprland / hyprland-gitᴬᵁᴿ (hyprland-nvidiaᴬᵁᴿ & its git variant has been discontinued)
 -  swaync (notification center)
 -  waybar (top bar)
 -  xwaylandvideobridgeᴬᵁᴿ (screensharing, primarily on discord)
 -  xdg-desktop-portal-hyprland (screensharing)
 -  xdg-desktop-portal-gtk (filepicker)
 -  swaybg (background)
 -  polkit-kde-agent (giving root perms)
 -  kitty (tty emu)
 -  wofi (app launcher)
 -  ttf-nerd-fonts-symbols-mono (used by waybar)
 -  noto-fonts-emoji
 -  ttf-joypixels
# optional packages (for certain keybinds & stuff)
 -  yayᴬᵁᴿ (to help download aur packages)
 -  dolphin (my file explorer of choice)
 -  vinegarꟳᴸᴬᵀᴾᴬᴷ (roblox)
 -  nm-connection-editor (clicking on wifi in waybar)
 -  discord (discord)
 -  thorium-browser-binᴬᵁᴿ (my browser of choice)
 -  grim (screenshotting)
 -  slurp (screenshotting)
 -  hyprshotᴬᵁᴿ (screenshotting)

# features
 - notifications, right click on bell to silence/unsilence
 - screensharing on outdated platforms (discord) via xwaylandvideobridge
 - polkit authentication via kde's agent
 - gtk filepicker
 - applicaton launcher with wofi
 - clicking on wifi in top right to configure wifi
 - changing volume by scrolling on the volume widget in the top left
 - opening wofi from clicking on the arch icon
 - clicking on workspace brings you to that workspace
 - system tray
 - hyprland lmao

# keybinds
 - full screenshot with Super+Shift+S
 - region screenshot with Super+Shift+X
 - open discord with Super+D
 - open thorium-browser with Super+F
 - open dolphin with Super+E
 - open wofi with Super+R
 - open vinegar (roblox player flatpak) with Super+G
 - move workspaces 1-10 with Super+(1-9 & 0)
 - scroll through workspaces with Super+MouseWheel
 - kill apps with Super+X
 - toggle floating on programs with Super+V
 - close hyprland with Super+M
 - do some funky resizing stuff with Super+P

# screenshots
<img src="preview/1.png">
<img src="preview/2.png">
<img src="preview/3.png">
<img src="preview/4.png">
<img src="preview/5.png">

# installation
use sddm for login manager (wayland session support),  
install all required packages,  
make sure hyprland opens,  
place all of the dot files into your ~/.config folder,  
boot hyprland  
done !!1!!!  

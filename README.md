# dotfiles
the .config files for my hyprland(kde) rice

dot files for Hyprland, themed around the KDE Plasma default background (as of plasma 5.27)

these dotfiles do not include any monitor config, as that is specific to your setup.
please follow the guide at https://wiki.hyprland.org/Configuring/Monitors/ for information on how to do this.

tested on arch and debian w/ nvidia gpu

# required packages
 -  hyprland / hyprland-nvidiaᴬᵁᴿ
 -  grim
 -  slurp
 -  hyprshotᴬᵁᴿ
 -  swaync
 -  waybar
 -  xwaylandvideobridgeᴬᵁᴿ
 -  xdg-desktop-portal-hyprland
 -  xdg-desktop-portal-gtk
 -  swaybg
 -  polkit-kde-agent
 -  kitty
 -  wofi
 -  ttf-nerd-fonts-symbols-mono
 -  noto-fonts-emoji
 -  ttf-joypixels
# optional packages
 -  dolphin
 -  vinegarꟳᴸᴬᵀᴾᴬᴷ
 -  nm-connection-editor
 -  discord
 -  thorium-browser-binᴬᵁᴿ

# features
 - notifications, right click on bell to silence/unsilence
 - screensharing on outdated platforms (discord) via xwaylandvideobridge
 - polkit authentication via kde's agent
 - gtk filepicker
 - applicaton launcher with wofi
 - clicking on wifi in top right to configure wifi
 - changing volume by scrolling on the volume widget in the top left
 - opening wofi from clicking on the arch icon
 - system tray
 - hyprland in all its glory

# keybinds
 - full screenshot with Super+Shift+S
 - region screenshot with Super+Shift+X
 - open discord with Super+D
 - open thorium with Super+F
 - open dolphin with Super+E
 - open wofi with Super+R
 - open vinegar (roblox player flatpak) with Super+G
 - move workspaces 1-10 with Super+(1-9 & 0)

# installation
install all required packages
make sure hyprland opens
place all of the dot files into your ~/.config folder

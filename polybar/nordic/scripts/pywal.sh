#!/usr/bin/env bash

# Color files
PFILE="$HOME/.config/polybar/nordic/colors.ini"
RFILE="$HOME/.config/polybar/nordic/scripts/rofi/colors.rasi"

# Get colors
pywal_get() {
	wal -i "$1" -q -t
}

# Change colors
change_color() {
	# polybar
	sed -i -e "s/blue = #.*/blue = $BLUE/g" $PFILE
	sed -i -e "s/green = #.*/green = $GREEN/g" $PFILE
	sed -i -e "s/red = #.*/red = $RED/g" $PFILE
	sed -i -e "s/occupied = #.*/occupied = $OCU/g" $PFILE
	sed -i -e "s/shutdown = #.*/shutdown = $DOWN/g" $PFILE
	# rofi
	cat > $RFILE <<- EOF
	/* colors */

	* {
	  red:  ${RED};
	  blue: ${BLUE};
	  green: ${GREEN};
	  occupied: ${OCU};
	  shutdown: ff${DOWN};
	}
	EOF
	
	polybar-msg cmd restart
}

# Main
if [[ -f "/usr/bin/wal" ]]; then
	if [[ "$1" ]]; then
		pywal_get "$1"

		# Source the pywal color file
		. "$HOME/.cache/wal/colors.sh"

        RED=`printf "%s\n" "$color13"`
        BLUE=`printf "%s\n" "$color2"`
        GREEN=`printf "%s\n" "$color11"`
        OCU=`printf "%s\n" "$color8"`
        DOWN=`printf "%s\n" "$color1"`
		change_color
	else
		echo -e "[!] Please enter the path to wallpaper. \n"
		echo "Usage : ./pywal.sh path/to/image"
	fi
else
	echo "[!] 'pywal' is not installed."
fi

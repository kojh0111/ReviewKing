import pandas as pd
import folium


def restaurant_map(data):
    m = folium.Map(location=[37.503709, 127.048748], zoom_start=16)
    restaurant = pd.DataFrame(data).T
    for _, info in restaurant.iterrows():
        folium.Marker(
            location=[info.lat, info.lng],
            popup=folium.Popup(
                f"{info.name}\n{info.category}", max_width=300, min_width=300
            ),
            icon=folium.Icon(color="red"),
        ).add_to(m)

    m.save("restaurant_map.html")

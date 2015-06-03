# Sidebar

Allows you to add a custom sidebar toggle to your Mendix layout that does not auto close.

## Contributing

For more information on contributing to this repository visit [Contributing to a GitHub repository](https://world.mendix.com/display/howto50/Contributing+to+a+GitHub+repository)!

## Typical usage scenario

Drop into a sidebar layout to enable a custom label to style as you need.

## Configuration

The suggested configuration is to use the glyphicon for the hamburger (glyphicon glyphicon-menu-hamburger).

1. Drop in the widget in the location of your choosing (note that it will be a html label).
2. Use the default glyphicon or select a different one. This will be set directly on the html label.
3. Set the sidebar class to your layout's css class selector. Mendix often uses "mx-layoutcontainer-left", but that might be used multiple times depending on your layout. Note that you will need to use the same format as a css selector (in the dot pattern: '.mx-layoutcontainer-left.your-class-name-here').

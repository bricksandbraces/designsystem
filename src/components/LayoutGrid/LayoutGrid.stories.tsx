import { withKnobs } from "@storybook/addon-knobs";
import { IconFile, IconSmartHome } from "@tabler/icons-react";
import React, { useRef } from "react";
import {
  Body,
  Breadcrumb,
  BreadcrumbItem,
  Header,
  Headline,
  Navigation,
  NavigationHeader,
  NavigationHeaderDivider,
  NavigationHeaderNav,
  NavigationHeaderNavLink,
  SideNav,
  SideNavItem,
  Tab,
  Tabs
} from "../..";
import { LayoutGridItem, LayoutGrid } from "./LayoutGrid";

export default { title: "Layout/LayoutGrid", decorators: [withKnobs] };

export const Default = () => {
  const containerRef = useRef(null);
  return (
    <LayoutGrid>
      <LayoutGridItem type="left">
        <SideNav
          basePath="#"
          logo={
            <svg
              className="logo"
              id="a"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 570.56 140.92"
            >
              <path
                className="b"
                d="M124.98,56.91v40.33c0,15.78-12.85,28.63-28.63,28.63h-19.53c-11.85,0-22.31-7.16-26.64-18.2-1.31-3.33-1.97-6.84-1.97-10.44v-8.89c0-1.26,1-2.25,2.25-2.25h18.64c1.26,0,2.25,1,2.25,2.25v8.89c0,.71,.13,1.36,.37,1.99,.84,2.12,2.83,3.46,5.09,3.46h19.53c3.02,0,5.45-2.44,5.45-5.45V56.91c0-1.7-.76-3.28-2.1-4.33L63.13,24.29c-1.97-1.52-4.72-1.52-6.69,0l-29.87,23.1-11.54,8.94c-.97,.76-2.39,.58-3.15-.42L.49,41.18c-.79-1-.6-2.41,.39-3.17l11.54-8.91L42.29,5.99c10.3-7.97,24.7-8,35,0l36.58,28.29c6.95,5.38,11.12,13.84,11.12,22.63Z"
              />
              <g>
                <path
                  className="b"
                  d="M186.68,110.85V15.02c0-1.26,.84-2.1,2.1-2.1h15.11c1.26,0,2.1,.84,2.1,2.1V54.75c3.92-7,10.49-12.03,20.7-12.03,14.27,0,24.76,10.35,24.76,28.26v39.87c0,1.26-.98,2.1-2.24,2.1h-14.97c-1.26,0-2.1-.84-2.1-2.1v-35.53c0-9.65-4.48-14.83-12.73-14.83s-13.43,5.17-13.43,14.83v35.53c0,1.26-.84,2.1-2.1,2.1h-15.11c-1.26,0-2.1-.84-2.1-2.1Z"
                />
                <path
                  className="b"
                  d="M264.46,78.39c0-20.15,14.13-35.67,35.25-35.67s32.87,15.39,32.87,32.73c0,6.72-1.54,10.49-7.55,10.49h-41.69c2.1,8.67,9.23,13.43,20.28,13.43,5.32,0,10.35-.98,15.95-4.2,.98-.56,1.68-.42,2.38,.56l5.17,7.13c.7,.98,.56,1.96-.7,3.08-5.88,5.87-14.69,8.67-24.34,8.67-22.52,0-37.63-15.53-37.63-36.23Zm50.92-6.02c-1.12-9.09-7.28-13.71-15.53-13.71s-15.11,4.62-16.79,13.71h32.32Z"
                />
                <path
                  className="b"
                  d="M331.06,124c0-.98,.84-1.12,1.82-.98,2.24,.42,4.06,.7,5.74,.7,6.72,0,8.25-3.5,8.25-8.53V46.5c0-1.26,.84-2.1,2.1-2.1h15.25c1.26,0,2.1,.84,2.1,2.1V117.84c0,15.95-8.81,23.08-23.5,23.08-3.78,0-6.72-.28-10.49-2.1-.84-.42-1.26-1.26-1.26-2.1v-12.73Z"
                />
                <path
                  className="b"
                  d="M383.1,110.85V46.5c0-1.26,.84-2.1,2.1-2.1h14.55c1.26,0,2.1,.56,2.1,2.24l.42,7.28c3.78-6.44,9.93-11.19,19.31-11.19,8.81,0,15.67,4.2,19.45,12.17,3.78-6.99,10.49-12.17,21.12-12.17,14.69,0,23.64,10.07,23.64,27.98v40.15c0,1.26-.84,2.1-2.1,2.1h-15.11c-1.26,0-2.1-.84-2.1-2.1v-35.95c0-9.37-3.36-14.41-10.91-14.41s-11.47,5.04-11.47,14.41v35.95c0,1.26-.84,2.1-2.1,2.1h-14.97c-1.4,0-2.24-.84-2.24-2.1v-35.95c0-9.37-3.5-14.41-10.91-14.41s-11.47,5.04-11.47,14.41v35.95c0,1.26-.84,2.1-2.1,2.1h-15.11c-1.26,0-2.1-.84-2.1-2.1Z"
                />
                <path
                  className="b"
                  d="M498.79,78.67c0-20.28,15.25-35.95,35.95-35.95s35.81,15.67,35.81,35.95-15.25,35.95-35.81,35.95-35.95-15.67-35.95-35.95Zm35.95,18.19c9.65,0,17.21-7,17.21-18.19s-7.55-18.19-17.21-18.19-17.35,6.99-17.35,18.19,7.55,18.19,17.35,18.19Z"
                />
              </g>
            </svg>
          }
        >
          <SideNavItem icon={<IconSmartHome />} label="Home" />
          <SideNavItem icon={<IconFile />} label="Auftragsverwaltung" />
        </SideNav>
      </LayoutGridItem>
      <LayoutGridItem type="content">
        <Header
          title="Auftragsverwaltung"
          borderWidth={3}
          breadcrumbs={
            <>
              <Breadcrumb aria-label="Breadcrumb nav">
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem currentItem>Auftragsverwaltung</BreadcrumbItem>
              </Breadcrumb>
            </>
          }
        >
          <Tabs
            defaultIndex={1}
            containerRef={containerRef}
            className="bb--header-tabs"
            containerClassName="bb--header-tabs__content"
          >
            <Tab title="Info">
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </Tab>
            <Tab title="Innovation Sprints">
              <Headline type="h4">Innovation Sprints</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </Tab>
            <Tab title="Experience Design">
              <Headline type="h4">Experience Design</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </Tab>
          </Tabs>
        </Header>
        <div ref={containerRef} />
      </LayoutGridItem>
    </LayoutGrid>
  );
};

export const WithTopBar = () => {
  const containerRef = useRef(null);
  return (
    <LayoutGrid>
      <LayoutGridItem type="top">
        <Navigation>
          <NavigationHeader>
            <NavigationHeaderNav>
              <NavigationHeaderNavLink href="#" label="Link 1" />
              <NavigationHeaderNavLink href="#" label="Link 2" />
              <NavigationHeaderNavLink href="#" label="Link 3" />
              <NavigationHeaderDivider />
              <NavigationHeaderNavLink href="#" label="Link 4" />
              <NavigationHeaderNavLink href="#" label="Link 5" />
              <NavigationHeaderDivider />
            </NavigationHeaderNav>
          </NavigationHeader>
        </Navigation>
      </LayoutGridItem>
      <LayoutGridItem type="left">
        <SideNav
          basePath="#"
          logo={
            <svg
              className="logo"
              id="a"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 570.56 140.92"
            >
              <path
                className="b"
                d="M124.98,56.91v40.33c0,15.78-12.85,28.63-28.63,28.63h-19.53c-11.85,0-22.31-7.16-26.64-18.2-1.31-3.33-1.97-6.84-1.97-10.44v-8.89c0-1.26,1-2.25,2.25-2.25h18.64c1.26,0,2.25,1,2.25,2.25v8.89c0,.71,.13,1.36,.37,1.99,.84,2.12,2.83,3.46,5.09,3.46h19.53c3.02,0,5.45-2.44,5.45-5.45V56.91c0-1.7-.76-3.28-2.1-4.33L63.13,24.29c-1.97-1.52-4.72-1.52-6.69,0l-29.87,23.1-11.54,8.94c-.97,.76-2.39,.58-3.15-.42L.49,41.18c-.79-1-.6-2.41,.39-3.17l11.54-8.91L42.29,5.99c10.3-7.97,24.7-8,35,0l36.58,28.29c6.95,5.38,11.12,13.84,11.12,22.63Z"
              />
              <g>
                <path
                  className="b"
                  d="M186.68,110.85V15.02c0-1.26,.84-2.1,2.1-2.1h15.11c1.26,0,2.1,.84,2.1,2.1V54.75c3.92-7,10.49-12.03,20.7-12.03,14.27,0,24.76,10.35,24.76,28.26v39.87c0,1.26-.98,2.1-2.24,2.1h-14.97c-1.26,0-2.1-.84-2.1-2.1v-35.53c0-9.65-4.48-14.83-12.73-14.83s-13.43,5.17-13.43,14.83v35.53c0,1.26-.84,2.1-2.1,2.1h-15.11c-1.26,0-2.1-.84-2.1-2.1Z"
                />
                <path
                  className="b"
                  d="M264.46,78.39c0-20.15,14.13-35.67,35.25-35.67s32.87,15.39,32.87,32.73c0,6.72-1.54,10.49-7.55,10.49h-41.69c2.1,8.67,9.23,13.43,20.28,13.43,5.32,0,10.35-.98,15.95-4.2,.98-.56,1.68-.42,2.38,.56l5.17,7.13c.7,.98,.56,1.96-.7,3.08-5.88,5.87-14.69,8.67-24.34,8.67-22.52,0-37.63-15.53-37.63-36.23Zm50.92-6.02c-1.12-9.09-7.28-13.71-15.53-13.71s-15.11,4.62-16.79,13.71h32.32Z"
                />
                <path
                  className="b"
                  d="M331.06,124c0-.98,.84-1.12,1.82-.98,2.24,.42,4.06,.7,5.74,.7,6.72,0,8.25-3.5,8.25-8.53V46.5c0-1.26,.84-2.1,2.1-2.1h15.25c1.26,0,2.1,.84,2.1,2.1V117.84c0,15.95-8.81,23.08-23.5,23.08-3.78,0-6.72-.28-10.49-2.1-.84-.42-1.26-1.26-1.26-2.1v-12.73Z"
                />
                <path
                  className="b"
                  d="M383.1,110.85V46.5c0-1.26,.84-2.1,2.1-2.1h14.55c1.26,0,2.1,.56,2.1,2.24l.42,7.28c3.78-6.44,9.93-11.19,19.31-11.19,8.81,0,15.67,4.2,19.45,12.17,3.78-6.99,10.49-12.17,21.12-12.17,14.69,0,23.64,10.07,23.64,27.98v40.15c0,1.26-.84,2.1-2.1,2.1h-15.11c-1.26,0-2.1-.84-2.1-2.1v-35.95c0-9.37-3.36-14.41-10.91-14.41s-11.47,5.04-11.47,14.41v35.95c0,1.26-.84,2.1-2.1,2.1h-14.97c-1.4,0-2.24-.84-2.24-2.1v-35.95c0-9.37-3.5-14.41-10.91-14.41s-11.47,5.04-11.47,14.41v35.95c0,1.26-.84,2.1-2.1,2.1h-15.11c-1.26,0-2.1-.84-2.1-2.1Z"
                />
                <path
                  className="b"
                  d="M498.79,78.67c0-20.28,15.25-35.95,35.95-35.95s35.81,15.67,35.81,35.95-15.25,35.95-35.81,35.95-35.95-15.67-35.95-35.95Zm35.95,18.19c9.65,0,17.21-7,17.21-18.19s-7.55-18.19-17.21-18.19-17.35,6.99-17.35,18.19,7.55,18.19,17.35,18.19Z"
                />
              </g>
            </svg>
          }
        >
          <SideNavItem icon={<IconSmartHome />} label="Home" />
          <SideNavItem icon={<IconFile />} label="Auftragsverwaltung" />
        </SideNav>
      </LayoutGridItem>

      <LayoutGridItem type="content">
        <Header
          title="Auftragsverwaltung"
          borderWidth={3}
          breadcrumbs={
            <>
              <Breadcrumb aria-label="Breadcrumb nav">
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem currentItem>Auftragsverwaltung</BreadcrumbItem>
              </Breadcrumb>
            </>
          }
        >
          <Tabs
            defaultIndex={1}
            containerRef={containerRef}
            className="bb--header-tabs"
            containerClassName="bb--header-tabs__content"
          >
            <Tab title="Info">
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </Tab>
            <Tab title="Innovation Sprints">
              <Headline type="h4">Innovation Sprints</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </Tab>
            <Tab title="Experience Design">
              <Headline type="h4">Experience Design</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </Tab>
          </Tabs>
        </Header>
        <div ref={containerRef} />
      </LayoutGridItem>
    </LayoutGrid>
  );
};

export const WithBottomBar = () => {
  const containerRef = useRef(null);
  return (
    <LayoutGrid>
      <LayoutGridItem type="bottom">
        <Navigation>
          <NavigationHeader>
            <NavigationHeaderNav>
              <NavigationHeaderNavLink href="#" label="Link 1" />
              <NavigationHeaderNavLink href="#" label="Link 2" />
              <NavigationHeaderNavLink href="#" label="Link 3" />
              <NavigationHeaderDivider />
              <NavigationHeaderNavLink href="#" label="Link 4" />
              <NavigationHeaderNavLink href="#" label="Link 5" />
              <NavigationHeaderDivider />
            </NavigationHeaderNav>
          </NavigationHeader>
        </Navigation>
      </LayoutGridItem>
      <LayoutGridItem type="left">
        <SideNav
          basePath="#"
          logo={
            <svg
              className="logo"
              id="a"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 570.56 140.92"
            >
              <path
                className="b"
                d="M124.98,56.91v40.33c0,15.78-12.85,28.63-28.63,28.63h-19.53c-11.85,0-22.31-7.16-26.64-18.2-1.31-3.33-1.97-6.84-1.97-10.44v-8.89c0-1.26,1-2.25,2.25-2.25h18.64c1.26,0,2.25,1,2.25,2.25v8.89c0,.71,.13,1.36,.37,1.99,.84,2.12,2.83,3.46,5.09,3.46h19.53c3.02,0,5.45-2.44,5.45-5.45V56.91c0-1.7-.76-3.28-2.1-4.33L63.13,24.29c-1.97-1.52-4.72-1.52-6.69,0l-29.87,23.1-11.54,8.94c-.97,.76-2.39,.58-3.15-.42L.49,41.18c-.79-1-.6-2.41,.39-3.17l11.54-8.91L42.29,5.99c10.3-7.97,24.7-8,35,0l36.58,28.29c6.95,5.38,11.12,13.84,11.12,22.63Z"
              />
              <g>
                <path
                  className="b"
                  d="M186.68,110.85V15.02c0-1.26,.84-2.1,2.1-2.1h15.11c1.26,0,2.1,.84,2.1,2.1V54.75c3.92-7,10.49-12.03,20.7-12.03,14.27,0,24.76,10.35,24.76,28.26v39.87c0,1.26-.98,2.1-2.24,2.1h-14.97c-1.26,0-2.1-.84-2.1-2.1v-35.53c0-9.65-4.48-14.83-12.73-14.83s-13.43,5.17-13.43,14.83v35.53c0,1.26-.84,2.1-2.1,2.1h-15.11c-1.26,0-2.1-.84-2.1-2.1Z"
                />
                <path
                  className="b"
                  d="M264.46,78.39c0-20.15,14.13-35.67,35.25-35.67s32.87,15.39,32.87,32.73c0,6.72-1.54,10.49-7.55,10.49h-41.69c2.1,8.67,9.23,13.43,20.28,13.43,5.32,0,10.35-.98,15.95-4.2,.98-.56,1.68-.42,2.38,.56l5.17,7.13c.7,.98,.56,1.96-.7,3.08-5.88,5.87-14.69,8.67-24.34,8.67-22.52,0-37.63-15.53-37.63-36.23Zm50.92-6.02c-1.12-9.09-7.28-13.71-15.53-13.71s-15.11,4.62-16.79,13.71h32.32Z"
                />
                <path
                  className="b"
                  d="M331.06,124c0-.98,.84-1.12,1.82-.98,2.24,.42,4.06,.7,5.74,.7,6.72,0,8.25-3.5,8.25-8.53V46.5c0-1.26,.84-2.1,2.1-2.1h15.25c1.26,0,2.1,.84,2.1,2.1V117.84c0,15.95-8.81,23.08-23.5,23.08-3.78,0-6.72-.28-10.49-2.1-.84-.42-1.26-1.26-1.26-2.1v-12.73Z"
                />
                <path
                  className="b"
                  d="M383.1,110.85V46.5c0-1.26,.84-2.1,2.1-2.1h14.55c1.26,0,2.1,.56,2.1,2.24l.42,7.28c3.78-6.44,9.93-11.19,19.31-11.19,8.81,0,15.67,4.2,19.45,12.17,3.78-6.99,10.49-12.17,21.12-12.17,14.69,0,23.64,10.07,23.64,27.98v40.15c0,1.26-.84,2.1-2.1,2.1h-15.11c-1.26,0-2.1-.84-2.1-2.1v-35.95c0-9.37-3.36-14.41-10.91-14.41s-11.47,5.04-11.47,14.41v35.95c0,1.26-.84,2.1-2.1,2.1h-14.97c-1.4,0-2.24-.84-2.24-2.1v-35.95c0-9.37-3.5-14.41-10.91-14.41s-11.47,5.04-11.47,14.41v35.95c0,1.26-.84,2.1-2.1,2.1h-15.11c-1.26,0-2.1-.84-2.1-2.1Z"
                />
                <path
                  className="b"
                  d="M498.79,78.67c0-20.28,15.25-35.95,35.95-35.95s35.81,15.67,35.81,35.95-15.25,35.95-35.81,35.95-35.95-15.67-35.95-35.95Zm35.95,18.19c9.65,0,17.21-7,17.21-18.19s-7.55-18.19-17.21-18.19-17.35,6.99-17.35,18.19,7.55,18.19,17.35,18.19Z"
                />
              </g>
            </svg>
          }
        >
          <SideNavItem icon={<IconSmartHome />} label="Home" />
          <SideNavItem icon={<IconFile />} label="Auftragsverwaltung" />
        </SideNav>
      </LayoutGridItem>

      <LayoutGridItem type="content">
        <Header
          title="Auftragsverwaltung"
          borderWidth={3}
          breadcrumbs={
            <>
              <Breadcrumb aria-label="Breadcrumb nav">
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem currentItem>Auftragsverwaltung</BreadcrumbItem>
              </Breadcrumb>
            </>
          }
        >
          <Tabs
            defaultIndex={1}
            containerRef={containerRef}
            className="bb--header-tabs"
            containerClassName="bb--header-tabs__content"
          >
            <Tab title="Info">
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </Tab>
            <Tab title="Innovation Sprints">
              <Headline type="h4">Innovation Sprints</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </Tab>
            <Tab title="Experience Design">
              <Headline type="h4">Experience Design</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </Tab>
          </Tabs>
        </Header>
        <div ref={containerRef} />
      </LayoutGridItem>
    </LayoutGrid>
  );
};

export const WithTopAndBottomBar = () => {
  const containerRef = useRef(null);
  return (
    <LayoutGrid>
      <LayoutGridItem type="left">
        <SideNav
          basePath="#"
          logo={
            <svg
              className="logo"
              id="a"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 570.56 140.92"
            >
              <path
                className="b"
                d="M124.98,56.91v40.33c0,15.78-12.85,28.63-28.63,28.63h-19.53c-11.85,0-22.31-7.16-26.64-18.2-1.31-3.33-1.97-6.84-1.97-10.44v-8.89c0-1.26,1-2.25,2.25-2.25h18.64c1.26,0,2.25,1,2.25,2.25v8.89c0,.71,.13,1.36,.37,1.99,.84,2.12,2.83,3.46,5.09,3.46h19.53c3.02,0,5.45-2.44,5.45-5.45V56.91c0-1.7-.76-3.28-2.1-4.33L63.13,24.29c-1.97-1.52-4.72-1.52-6.69,0l-29.87,23.1-11.54,8.94c-.97,.76-2.39,.58-3.15-.42L.49,41.18c-.79-1-.6-2.41,.39-3.17l11.54-8.91L42.29,5.99c10.3-7.97,24.7-8,35,0l36.58,28.29c6.95,5.38,11.12,13.84,11.12,22.63Z"
              />
              <g>
                <path
                  className="b"
                  d="M186.68,110.85V15.02c0-1.26,.84-2.1,2.1-2.1h15.11c1.26,0,2.1,.84,2.1,2.1V54.75c3.92-7,10.49-12.03,20.7-12.03,14.27,0,24.76,10.35,24.76,28.26v39.87c0,1.26-.98,2.1-2.24,2.1h-14.97c-1.26,0-2.1-.84-2.1-2.1v-35.53c0-9.65-4.48-14.83-12.73-14.83s-13.43,5.17-13.43,14.83v35.53c0,1.26-.84,2.1-2.1,2.1h-15.11c-1.26,0-2.1-.84-2.1-2.1Z"
                />
                <path
                  className="b"
                  d="M264.46,78.39c0-20.15,14.13-35.67,35.25-35.67s32.87,15.39,32.87,32.73c0,6.72-1.54,10.49-7.55,10.49h-41.69c2.1,8.67,9.23,13.43,20.28,13.43,5.32,0,10.35-.98,15.95-4.2,.98-.56,1.68-.42,2.38,.56l5.17,7.13c.7,.98,.56,1.96-.7,3.08-5.88,5.87-14.69,8.67-24.34,8.67-22.52,0-37.63-15.53-37.63-36.23Zm50.92-6.02c-1.12-9.09-7.28-13.71-15.53-13.71s-15.11,4.62-16.79,13.71h32.32Z"
                />
                <path
                  className="b"
                  d="M331.06,124c0-.98,.84-1.12,1.82-.98,2.24,.42,4.06,.7,5.74,.7,6.72,0,8.25-3.5,8.25-8.53V46.5c0-1.26,.84-2.1,2.1-2.1h15.25c1.26,0,2.1,.84,2.1,2.1V117.84c0,15.95-8.81,23.08-23.5,23.08-3.78,0-6.72-.28-10.49-2.1-.84-.42-1.26-1.26-1.26-2.1v-12.73Z"
                />
                <path
                  className="b"
                  d="M383.1,110.85V46.5c0-1.26,.84-2.1,2.1-2.1h14.55c1.26,0,2.1,.56,2.1,2.24l.42,7.28c3.78-6.44,9.93-11.19,19.31-11.19,8.81,0,15.67,4.2,19.45,12.17,3.78-6.99,10.49-12.17,21.12-12.17,14.69,0,23.64,10.07,23.64,27.98v40.15c0,1.26-.84,2.1-2.1,2.1h-15.11c-1.26,0-2.1-.84-2.1-2.1v-35.95c0-9.37-3.36-14.41-10.91-14.41s-11.47,5.04-11.47,14.41v35.95c0,1.26-.84,2.1-2.1,2.1h-14.97c-1.4,0-2.24-.84-2.24-2.1v-35.95c0-9.37-3.5-14.41-10.91-14.41s-11.47,5.04-11.47,14.41v35.95c0,1.26-.84,2.1-2.1,2.1h-15.11c-1.26,0-2.1-.84-2.1-2.1Z"
                />
                <path
                  className="b"
                  d="M498.79,78.67c0-20.28,15.25-35.95,35.95-35.95s35.81,15.67,35.81,35.95-15.25,35.95-35.81,35.95-35.95-15.67-35.95-35.95Zm35.95,18.19c9.65,0,17.21-7,17.21-18.19s-7.55-18.19-17.21-18.19-17.35,6.99-17.35,18.19,7.55,18.19,17.35,18.19Z"
                />
              </g>
            </svg>
          }
        >
          <SideNavItem icon={<IconSmartHome />} label="Home" />
          <SideNavItem icon={<IconFile />} label="Auftragsverwaltung" />
        </SideNav>
      </LayoutGridItem>
      <LayoutGridItem type="top">
        <Navigation>
          <NavigationHeader>
            <NavigationHeaderNav>
              <NavigationHeaderNavLink href="#" label="Link 1" />
              <NavigationHeaderNavLink href="#" label="Link 2" />
              <NavigationHeaderNavLink href="#" label="Link 3" />
              <NavigationHeaderDivider />
              <NavigationHeaderNavLink href="#" label="Link 4" />
              <NavigationHeaderNavLink href="#" label="Link 5" />
              <NavigationHeaderDivider />
            </NavigationHeaderNav>
          </NavigationHeader>
        </Navigation>
      </LayoutGridItem>
      <LayoutGridItem type="bottom">
        <Navigation>
          <NavigationHeader>
            <NavigationHeaderNav>
              <NavigationHeaderNavLink href="#" label="Link 1" />
              <NavigationHeaderNavLink href="#" label="Link 2" />
              <NavigationHeaderNavLink href="#" label="Link 3" />
              <NavigationHeaderDivider />
              <NavigationHeaderNavLink href="#" label="Link 4" />
              <NavigationHeaderNavLink href="#" label="Link 5" />
              <NavigationHeaderDivider />
            </NavigationHeaderNav>
          </NavigationHeader>
        </Navigation>
      </LayoutGridItem>

      <LayoutGridItem type="content">
        <Header
          title="Auftragsverwaltung"
          borderWidth={3}
          breadcrumbs={
            <>
              <Breadcrumb aria-label="Breadcrumb nav">
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem currentItem>Auftragsverwaltung</BreadcrumbItem>
              </Breadcrumb>
            </>
          }
        >
          <Tabs
            defaultIndex={1}
            containerRef={containerRef}
            className="bb--header-tabs"
            containerClassName="bb--header-tabs__content"
          >
            <Tab title="Info">
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </Tab>
            <Tab title="Innovation Sprints">
              <Headline type="h4">Innovation Sprints</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </Tab>
            <Tab title="Experience Design">
              <Headline type="h4">Experience Design</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </Tab>
          </Tabs>
        </Header>
        <div ref={containerRef} />
      </LayoutGridItem>
    </LayoutGrid>
  );
};

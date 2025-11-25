"use client";
import { useRef } from "react";
import Button from "../button";
import Container from "../container";
import SearchButton from "../search-button";
import Searchbar from "../searchbar";
import { autoUpdate, offset, shift, useFloating } from "@floating-ui/react-dom";

export default function SearchPopover() {
  const popoverRef = useRef<HTMLDivElement>(null);
  const { refs, floatingStyles } = useFloating({
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(24),
      shift()
    ],
  });

  function handleClose() {
    popoverRef.current?.hidePopover();
  }
  return (
    <div>
      <SearchButton
        ref={refs.setReference}
        popoverTarget="searchbar-popover"
      ></SearchButton>
      <div
        id="searchbar-popover"
        popover="auto"
        style={floatingStyles}
        ref={(el) => {
          refs.setFloating(el);
          popoverRef.current = el;
        }}
        className="w-full bg-background shadow-xl pt-4 pb-8"
      >
        <Container>
          <div className="flex  justify-end mb-4">
            <Button className="underline" onClick={handleClose}>
              Close Search
            </Button>
          </div>

          <Searchbar></Searchbar>
        </Container>
      </div>
    </div>
  );
}

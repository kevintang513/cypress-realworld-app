# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- New `NotificationBadge` component extracted from NavBar for better modularity and testability (KEV-13)
- Component tests for `NotificationBadge` component

### Changed

- NavBar component now uses the new `NotificationBadge` component instead of inline badge implementation
- Notification badge styling moved from NavBar to NotificationBadge component

### Technical Details

- Extracted notification badge logic from `src/components/NavBar.tsx`
- Created new reusable `src/components/NotificationBadge.tsx` component
- Added comprehensive component tests in `src/components/NotificationBadge.cy.tsx`
- Maintained all existing functionality and data-test attributes for E2E test compatibility

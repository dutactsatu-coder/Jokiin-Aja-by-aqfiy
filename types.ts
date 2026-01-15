
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  priceStart?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

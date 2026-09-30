import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../src/index.js';

describe('Part 1: API Integration Tests', () => {
  it('should pass placeholder test', () => {
    // TODO: Student implementation - Part 1: Integration Testing
    // Test user creation (POST /users)
    // Test ticket creation (POST /tickets)
    // Test auth middleware rejection (401 when X-User-Id is missing or invalid)
    // Test 404 responses for non-existent users and tickets
    // Test pagination and filtering on GET /tickets
    expect(true).toBe(true);
  });

  it('should make users correctly', async () => {
    const res = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-User-Id': '1'
      },
      body: JSON.stringify({ name: 'John Doe', email: 'john@doe.com' }),
    });
    expect(res.status).toBe(201);
  });

  it('should make tickets correctly', async () => {
    const res = await fetch('http://localhost:3000/tickets', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "X-User-Id": '1'
      },
      body: JSON.stringify({ title: 'I am dying', description: 'Help' }),
    });
    expect(res.status).toBe(201);
  });
});